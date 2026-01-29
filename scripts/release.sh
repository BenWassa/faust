#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: scripts/release.sh {major|minor|patch}"
  exit 1
fi

LEVEL="$1"
case "$LEVEL" in
  major|minor|patch) ;;
  *)
    echo "Invalid release level: $LEVEL"
    echo "Usage: scripts/release.sh {major|minor|patch}"
    exit 1
    ;;
esac

npm version "$LEVEL" --no-git-tag-version
npm run build

echo ""
echo "Release prep complete."
echo "Next steps:"
echo "  git status"
echo "  git add package.json package-lock.json docs"
echo "  git commit -m \"chore(release): v<new-version>\""
echo "  git tag v<new-version>"
echo "  git push --follow-tags"
