---
name: vscode-theme-color-system
description: Audit and improve VS Code theme color systems, especially `themes/*.json` files and related TypeScript or Node build scripts. Use when Codex needs to review palette consistency, editor state hierarchy, TextMate or semantic token coverage, dark/light parity, issue-driven color regressions, align colors with the official VS Code theme color reference, or extract hand-written theme JSON into a maintainable generation workflow.
---

# VS Code Theme Color System

## Overview

Review a VS Code theme as a system, not as isolated hex values. Identify inconsistent color roles, weak editor-state contrast, missing token coverage, and dark/light drift, then either patch the theme directly or centralize shared rules into a TypeScript or Node-based generator.

## Workflow

1. Inspect the repository shape first.
Look for `DESIGN.md`, `themes/*.json`, `package.json`, and any existing theme tooling.

2. Treat `DESIGN.md` as the local source of truth when it exists.
Explain both:
- where the implementation diverges from the design intent
- where the design intent itself may need improvement
- which `DESIGN.md` section each important finding maps to
- which items from `DESIGN.md`'s `Review Checklist` still require visual confirmation

3. Validate workbench color IDs against the official VS Code theme color reference.
Use `references/official-sources.md`.

4. Review the theme in four layers:
- UI colors and surfaces
- editor states
- `tokenColors`
- `semanticTokenColors`

5. Preserve identity while increasing structure.
Do not redesign the palette unless asked. Default to keeping hue families and improving role assignment, hierarchy, and maintainability.

## Review Heuristics

- Treat repeated low-alpha neutrals across many editor states as a likely design bug.
- Treat bracket colors as a system: neutral gray ladders are acceptable if active guides and bracket match cues still read clearly.
- Treat commented-out semantic roles as missing system intent until proven otherwise.
- Treat mirrored dark/light JSON files as a cue to centralize shared rules.
- Prefer explicit role names over raw color reuse when introducing a generator.

## Implementation Pattern

When converting hand-written themes into a system:

1. Keep the existing generated files in `themes/` as outputs.
2. Add a small build script, usually `scripts/generate-themes.ts` or `scripts/generate-themes.mjs`.
3. Define palette objects per variant, such as `dark` and `light`.
4. Define shared builders for:
- editor state colors
- bracket ladder colors
- TextMate token roles
- semantic token roles
5. Write the generated JSON back to the existing theme paths.
6. Add a package script such as `build:themes`.
7. Document the generation entrypoint in the repository if the project is meant to be maintained by humans.

Prefer TypeScript or plain Node scripts over Python unless the user explicitly asks for Python.

## Execution Notes

- Use `references/role-model.md` when translating raw hex assignments into stable color roles.
- Use `references/review-checklist.md` for a thorough manual pass.
- Prefer `rg --files` and `rg -n` to map theme structure and repeated color usage.
- Prefer `DESIGN.md` over ad hoc inference when the repository defines one.
- If `DESIGN.md` contains a `Review Checklist` section, use it as the final close-out checklist after the structural audit.
- Prefer official VS Code docs over memory when validating workbench color keys.
- If issue links or user reports are provided, inspect them and map the complaint back to the corresponding theme keys.
- When changing colors, update both dark and light variants in the same pass unless the request is explicitly variant-specific.
- Use `scripts/audit-theme.ts` for a fast structural scan before manual review.
- Prefer `--design-doc=DESIGN.md` so findings cite repository design sections directly.
- Prefer `--official-source=https://code.visualstudio.com/api/references/theme-color` when network access is available, or point it at a saved local copy.
- Use `--format=json` when the audit output needs to be consumed by another script.
- Use `--format=summary` for a short issue- or PR-ready result.

## Output Expectations

Use the default response shape in `references/output-format.md`.

## References

- For a full review checklist, read `references/review-checklist.md`.
- For official source links, read `references/official-sources.md`.
- For role naming and state boundaries, read `references/role-model.md`.
- For the default response structure, read `references/output-format.md`.
