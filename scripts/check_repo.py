#!/usr/bin/env python3
"""Small tracked-file hygiene check; never deletes files."""
from pathlib import Path, PurePosixPath
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
TEMP_SUFFIXES = (".aux", ".fdb_latexmk", ".fls", ".log", ".out", ".synctex.gz", ".toc")


def forbidden(path):
    parts = PurePosixPath(path).parts
    name = parts[-1]
    return (any(p in {"node_modules", "dist", ".vercel", ".artifacts", "__pycache__"} for p in parts)
            or any(p == ".DS_Store" or p.startswith("._") for p in parts)
            or name.endswith(TEMP_SUFFIXES)
            or (name.startswith(".env") and name not in {".env.example", ".env.sample"}))


def main():
    records = subprocess.check_output(["git", "ls-files", "--stage", "-z"], cwd=ROOT).decode().split("\0")
    errors = []
    for record in filter(None, records):
        metadata, path = record.split("\t", 1)
        if metadata.startswith("160000 ") or forbidden(path):
            errors.append(path)
    if errors:
        print("Forbidden tracked files/submodules:\n" + "\n".join(errors), file=sys.stderr)
        return 1
    print("SUCCESSFUL: tracked-file hygiene; no generated files, environment files or submodules")
    return 0


if __name__ == "__main__":
    sys.exit(main())
