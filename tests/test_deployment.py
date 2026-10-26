import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location("deployment", Path(__file__).resolve().parents[1] / "scripts/verify_deployment.py")
deployment = importlib.util.module_from_spec(spec)
spec.loader.exec_module(deployment)


class DeploymentTests(unittest.TestCase):
    def test_exact_sha_environment_and_newest_deployment_required(self):
        old = dict(id=1, sha="a" * 40, environment="Preview")
        new = {**old, "id": 2}
        self.assertEqual(deployment.select_deployment([old, new], old["sha"], "Preview"), new)
        for sha, env in [("b" * 40, "Preview"), ("a" * 40, "Production")]:
            with self.assertRaisesRegex(ValueError, "NEVER-EXECUTED"):
                deployment.select_deployment([old], sha, env)

    def test_credentials_non_https_and_foreign_hosts_rejected(self):
        self.assertEqual(deployment.validate_url("https://project.vercel.app"), "https://project.vercel.app")
        for url in ["http://project.vercel.app", "https://project.vercel.app.evil.test", "https://localhost",
                    "https://user:password@project.vercel.app", "https://project.vercel.app:8080"]:
            with self.assertRaises(ValueError):
                deployment.validate_url(url)

    def test_only_local_script_and_stylesheet_assets_selected(self):
        parser = deployment.Assets()
        parser.feed('<div id="root"></div><script src="/assets/app.js"></script>'
                    '<link href="/assets/app.css" rel="stylesheet">'
                    '<script src="https://cdn.example/script.js"></script>')
        self.assertTrue(parser.root)
        self.assertEqual(parser.references, ["/assets/app.js", "/assets/app.css"])

    def test_redirects_are_never_followed(self):
        self.assertIsNone(deployment.NoRedirect().redirect_request(None, None, 302, "", {}, "https://other.test"))


if __name__ == "__main__":
    unittest.main()
