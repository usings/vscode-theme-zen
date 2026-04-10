# Official Sources

Use these sources before declaring a VS Code theme key invalid, missing, or outdated.

## Primary

- Theme color reference:
  https://code.visualstudio.com/api/references/theme-color
- Color theme guide:
  https://code.visualstudio.com/api/extension-guides/color-theme
- Semantic highlight guide:
  https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
- Syntax highlight guide:
  https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide

## How to Use Them

- Use the theme color reference to verify workbench color IDs and their intended scope.
- Use the color theme guide to confirm how theme JSON is structured and contributed.
- Use the semantic highlight guide when deciding whether a distinction belongs in `semanticTokenColors`.
- Use the syntax highlight guide when deciding whether a distinction belongs in `tokenColors`.

## Practical Rule

When a repository theme contains a workbench color key, first verify the key against the official theme color reference. If a user reports a missing or weak state, map the complaint to the documented color IDs before changing the palette.
