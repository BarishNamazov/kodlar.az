#!/usr/bin/env python3
"""
Update a glossary term's az or en translation in glossary.ts,
then update all [[references]] in content files accordingly.

Usage:
    python scripts/update_glossary_term.py

The script will interactively ask which field (az/en) to search,
the current value, and the new value.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GLOSSARY_FILE = ROOT / "src" / "data" / "glossary.ts"
CONTENT_DIR = ROOT / "src" / "content"


def find_content_files():
    """Find all .md and .mdx files in the content directory."""
    files = []
    for ext in ("*.md", "*.mdx"):
        files.extend(CONTENT_DIR.rglob(ext))
    return sorted(files)


def update_glossary_ts(field: str, old_value: str, new_value: str) -> bool:
    """Update the matching field in glossary.ts. Returns True if a change was made."""
    text = GLOSSARY_FILE.read_text(encoding="utf-8")

    # Match:  az: "old_value"  or  en: "old_value"
    # Handles both single-line values and the field being on its own line.
    pattern = re.compile(
        rf'(\b{field}\s*:\s*)"({re.escape(old_value)})"',
    )

    new_text, count = pattern.subn(rf'\1"{new_value}"', text)

    if count == 0:
        print(f'No match for {field}: "{old_value}" in glossary.ts')
        return False

    GLOSSARY_FILE.write_text(new_text, encoding="utf-8")
    print(f"Updated glossary.ts: {field} \"{old_value}\" -> \"{new_value}\" ({count} occurrence(s))")
    return True


def update_content_files(old_value: str, new_value: str):
    """Replace [[old_value]] with [[new_value]] in all content files."""
    old_ref = f"[[{old_value}]]"
    new_ref = f"[[{new_value}]]"

    total = 0
    for path in find_content_files():
        text = path.read_text(encoding="utf-8")
        if old_ref not in text:
            continue

        count = text.count(old_ref)
        text = text.replace(old_ref, new_ref)
        path.write_text(text, encoding="utf-8")

        rel = path.relative_to(ROOT)
        print(f"  {rel}: {count} replacement(s)")
        total += count

    if total:
        print(f"Updated {total} reference(s) across content files.")
    else:
        print(f'No [[{old_value}]] references found in content files.')


def update_aliases(old_value: str, new_value: str):
    """Update aliases array entries in glossary.ts if they match."""
    text = GLOSSARY_FILE.read_text(encoding="utf-8")

    # Match "old_value" inside aliases arrays
    pattern = re.compile(rf'"({re.escape(old_value)})"')

    # Only replace inside aliases arrays - scan for aliases blocks
    new_lines = []
    in_aliases = False
    changed = False

    for line in text.splitlines(keepends=True):
        if "aliases:" in line:
            in_aliases = True
        if in_aliases:
            new_line, n = pattern.subn(f'"{new_value}"', line)
            if n > 0:
                changed = True
                line = new_line
            if "]" in line:
                in_aliases = False
        new_lines.append(line)

    if changed:
        GLOSSARY_FILE.write_text("".join(new_lines), encoding="utf-8")
        print(f'Also updated matching aliases in glossary.ts.')


def main():
    if not GLOSSARY_FILE.exists():
        print(f"Error: {GLOSSARY_FILE} not found")
        sys.exit(1)

    field = input("Which field to update? (az/en): ").strip().lower()
    if field not in ("az", "en"):
        print("Must be 'az' or 'en'.")
        sys.exit(1)

    old_value = input("Current value: ").strip()
    new_value = input("New value: ").strip()

    if not old_value or not new_value:
        print("Values cannot be empty.")
        sys.exit(1)

    if old_value == new_value:
        print("Values are the same, nothing to do.")
        sys.exit(0)

    # 1. Update glossary.ts
    if not update_glossary_ts(field, old_value, new_value):
        sys.exit(1)

    # 2. Update aliases that match
    update_aliases(old_value, new_value)

    # 3. Update [[references]] in content files
    # For az field changes, references use the az term
    # For en field changes, references could use the en term
    update_content_files(old_value, new_value)


if __name__ == "__main__":
    main()
