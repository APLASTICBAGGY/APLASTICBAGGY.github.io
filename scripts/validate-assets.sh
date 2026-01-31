#!/bin/bash
# Validate all image assets are actual images (not HTML error pages)

set -e
cd "$(dirname "$0")/.."

echo "🔍 Validating image assets..."
echo ""

ERRORS=0

# Check all files that should be images
for img in $(find img -type f \( -name "*.gif" -o -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) 2>/dev/null); do
    filetype=$(file -b "$img")
    
    if echo "$filetype" | grep -qi "HTML\|text\|ASCII"; then
        echo "❌ BROKEN: $img"
        echo "   → Contains: ${filetype:0:50}..."
        ERRORS=$((ERRORS + 1))
    elif echo "$filetype" | grep -qi "GIF\|PNG\|JPEG\|WebP\|image"; then
        echo "✓ OK: $img"
    else
        echo "⚠️  UNKNOWN: $img ($filetype)"
    fi
done

echo ""

if [ $ERRORS -gt 0 ]; then
    echo "❌ Found $ERRORS broken image(s)!"
    echo "   These are likely HTML error pages, not actual images."
    echo "   Fix before committing."
    exit 1
else
    echo "✅ All image assets valid!"
    exit 0
fi
