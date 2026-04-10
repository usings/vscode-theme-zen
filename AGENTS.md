# Repository Guidelines

## Project Structure & Module Organization

This repository is a VS Code theme package, not an application. The main deliverables are [`themes/dark.json`](/Users/i/Projects/vscode-theme-zen/themes/dark.json) and [`themes/light.json`](/Users/i/Projects/vscode-theme-zen/themes/light.json). Visual assets live in [`assets/`](/Users/i/Projects/vscode-theme-zen/assets). [`DESIGN.md`](/Users/i/Projects/vscode-theme-zen/DESIGN.md) is the source of truth for palette roles, editor-state hierarchy, terminal rules, and review criteria. [`package.json`](/Users/i/Projects/vscode-theme-zen/package.json) defines extension metadata and release scripts.

## Build, Test, and Development Commands

- `pnpm install`: install dependencies and set up hooks via `prepare`.
- `pnpm release`: bump and tag a release through Lerna.
- `pnpm publish`: publish the extension with `vsce publish --no-dependencies`.
- `pnpm commitlint --edit .git/COMMIT_EDITMSG`: manually validate a commit message if needed.

There is no app runtime or compile step. Theme changes are validated by reviewing the JSON, checking against [`DESIGN.md`](/Users/i/Projects/vscode-theme-zen/DESIGN.md), and visually verifying in VS Code.

## Coding Style & Naming Conventions

Use 2-space indentation in JSON and Markdown. Keep theme keys grouped by VS Code area rather than alphabetizing unrelated sections. Preserve existing naming patterns such as `Zen Dark` and `Zen Light`. When changing color meaning, update [`DESIGN.md`](/Users/i/Projects/vscode-theme-zen/DESIGN.md) first, then update both theme files in the same pass.

## Testing Guidelines

This project does not use an automated test framework. Validation is manual:

- confirm dark and light variants stay role-consistent
- verify selection, find-match, bracket, and terminal states remain distinct
- review semantic token colors in real files such as TypeScript, Markdown, diff views, and terminal output

Treat [`DESIGN.md`](/Users/i/Projects/vscode-theme-zen/DESIGN.md) `Review Checklist` as the final pre-merge checklist.

## Commit & Pull Request Guidelines

Follow Conventional Commits, matching recent history such as `feat(theme): refine theme color system and align DESIGN.md` and `fix: match active tab background with editor`. The repository enforces commit message linting through Lefthook.

Pull requests should include:

- a short description of the visual or semantic change
- linked issue(s) when applicable
- updated screenshots in [`assets/`](/Users/i/Projects/vscode-theme-zen/assets) for visible theme changes
- confirmation that both theme variants and [`DESIGN.md`](/Users/i/Projects/vscode-theme-zen/DESIGN.md) were reviewed
