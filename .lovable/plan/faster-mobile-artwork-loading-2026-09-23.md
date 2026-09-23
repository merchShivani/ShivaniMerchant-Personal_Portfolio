# Faster Mobile Artwork Loading

## Changes
- Create smaller phone and desktop WebP versions of the portrait, moodboard, blossom panel, and watercolor landscape.
- Serve the new versions from fast cached asset delivery and remove the original large local copies after all references are updated.
- Use responsive image sources so phones download smaller artwork than desktop screens.
- Keep the portrait eager and prioritized because it appears first; lazy-load all artwork below the first screen.
- Add stable image proportions and decoding hints to prevent layout jumps while images load.
- Verify phone and desktop visuals, image requests, page overflow, and browser errors.

## Scope
- Preserve the current design, crops, content, colors, and page structure.
- Keep the already-small project preview images unchanged, while retaining their lazy loading and stable dimensions.
