#!/usr/bin/env python3
"""Run the free Gitleaks CLI, pinned and checksum-verified; no GitHub app/license."""
import hashlib
import io
from pathlib import Path
import platform
import subprocess
import sys
import tarfile
import tempfile

VERSION = "8.30.1"
SHA256 = {
    ("Linux", "x86_64"): ("linux_x64", "551f6fc83ea457d62a0d98237cbad105af8d557003051f41f3e7ca7b3f2470eb"),
    ("Linux", "aarch64"): ("linux_arm64", "e4a487ee7ccd7d3a7f7ec08657610aa3606637dab924210b3aee62570fb4b080"),
    ("Darwin", "arm64"): ("darwin_arm64", "b40ab0ae55c505963e365f271a8d3846efbc170aa17f2607f13df610a9aeb6a5"),
    ("Darwin", "x86_64"): ("darwin_x64", "dfe101a4db2255fc85120ac7f3d25e4342c3c20cf749f2c20a18081af1952709"),
}


def main():
    target, checksum = SHA256[(platform.system(), platform.machine())]
    url = f"https://github.com/gitleaks/gitleaks/releases/download/v{VERSION}/gitleaks_{VERSION}_{target}.tar.gz"
    archive = subprocess.check_output(["curl", "--fail", "--silent", "--show-error", "--location",
                                       "--retry", "2", "--max-time", "120", url])
    if hashlib.sha256(archive).hexdigest() != checksum:
        raise ValueError("Gitleaks download checksum mismatch")
    with tempfile.TemporaryDirectory(prefix="gitleaks-") as work:
        binary = Path(work) / "gitleaks"
        with tarfile.open(fileobj=io.BytesIO(archive), mode="r:gz") as tar:
            binary.write_bytes(tar.extractfile("gitleaks").read())
        binary.chmod(0o700)
        print(f"Gitleaks {VERSION}; verified archive SHA-256 {checksum}", flush=True)
        return subprocess.run([str(binary), "git", "--redact", "--no-banner", "--log-opts=HEAD", "."],
                              cwd=Path(__file__).resolve().parents[1]).returncode


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (KeyError, ValueError, OSError, subprocess.CalledProcessError) as exc:
        sys.exit(f"Secret scan FAILED/NOT EXECUTED: {exc}")
