#!/usr/bin/env python3
"""Read-only Vercel deployment/HTTP evidence from GitHub; never creates a deployment."""
import argparse
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import sys
from urllib.error import HTTPError
from urllib.parse import urljoin, urlparse
from urllib.request import HTTPRedirectHandler, build_opener

REPOSITORY = "htang7415/Hao_Tang_Personal_website"


def api(endpoint):
    pages = json.loads(subprocess.check_output([
        "gh", "api", "--method", "GET", "--paginate", "--slurp", endpoint,
    ], text=True))
    return [item for page in pages for item in page]


def select_deployment(deployments, sha, environment):
    matches = [d for d in deployments if d["sha"] == sha and d["environment"].casefold() == environment.casefold()]
    if not matches:
        raise ValueError(f"NEVER-EXECUTED: no {environment} deployment for {sha}")
    return max(matches, key=lambda d: d["id"])


def validate_url(url):
    parsed = urlparse(url)
    if (parsed.scheme != "https" or not parsed.hostname or not parsed.hostname.endswith(".vercel.app")
            or parsed.username or parsed.password or parsed.port not in {None, 443}):
        raise ValueError("Expected an HTTPS *.vercel.app deployment URL without credentials")
    return url


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = False
        self.references = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.root |= tag == "div" and attrs.get("id") == "root"
        value = attrs.get("src") if tag == "script" else attrs.get("href") if tag == "link" else None
        if value and not urlparse(value).netloc and urlparse(value).path.endswith((".js", ".css")):
            self.references.append(value)


def fetch(url):
    try:
        with build_opener(NoRedirect).open(validate_url(url), timeout=30) as response:
            if response.status != 200:
                raise ValueError(f"HTTP check FAILED: {response.status}")
            return response.read(), response.headers.get_content_type()
    except HTTPError as exc:
        if exc.code in {301, 302, 303, 307, 308, 401, 403}:
            raise ValueError(f"SKIPPED: HTTP {exc.code}; deployment protected/redirected; use owner browser access, never bypass protection") from exc
        raise


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sha", required=True)
    parser.add_argument("--environment", required=True, choices=["Preview", "Production"])
    args = parser.parse_args()
    if not re.fullmatch(r"[0-9a-f]{40}", args.sha):
        raise ValueError("Supply a full commit SHA")
    deployment = select_deployment(api(f"repos/{REPOSITORY}/deployments?sha={args.sha}&per_page=100"),
                                   args.sha, args.environment)
    statuses = api(f"repos/{REPOSITORY}/deployments/{deployment['id']}/statuses?per_page=100")
    if not statuses or statuses[0]["state"] != "success":
        raise ValueError(f"FAILED/PENDING: latest deployment status is {statuses[0]['state'] if statuses else 'missing'}")
    url = validate_url(statuses[0].get("environment_url") or statuses[0].get("target_url") or "")
    body, content_type = fetch(url)
    if content_type != "text/html":
        raise ValueError("Deployment did not serve HTML")
    parsed = Assets()
    parsed.feed(body.decode("utf-8"))
    if not parsed.root or not any(urlparse(ref).path.endswith(".js") for ref in parsed.references):
        raise ValueError("Deployment HTML lacks the React root or application JavaScript")
    hashes = {"index.html": hashlib.sha256(body).hexdigest()}
    for reference in parsed.references:
        asset, kind = fetch(urljoin(url, reference))
        if not asset or kind == "text/html":
            raise ValueError(f"Missing asset/HTML fallback: {reference}")
        hashes[reference] = hashlib.sha256(asset).hexdigest()
    data = dict(status="SUCCESSFUL", sha=args.sha, environment=args.environment,
                deployment_id=deployment["id"], deployment_url=url, sha256=hashes,
                limitations="HTTP and emitted assets only; no browser rendering or custom-domain assignment proof")
    output = Path(__file__).resolve().parents[1] / ".artifacts"
    output.mkdir(exist_ok=True)
    (output / f"deployment-{args.environment.lower()}-{args.sha}.json").write_text(json.dumps(data, indent=2) + "\n")
    print(json.dumps(data, indent=2))


if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, KeyError, subprocess.CalledProcessError) as exc:
        sys.exit(str(exc))
