---
name: vscode-theme-color-system
description: Audit and improve VS Code themes as a coherent color system. Use for workbench color reviews, editor-state contrast, token and semantic coverage, dark/light parity, and issue-driven regressions.
---

# VS Code Theme Color System

Treat a theme as a role system, not a bag of hex values. Keep the theme's identity unless the user explicitly asks for a redesign.

## Use This Skill For

- auditing `themes/*.json`
- fixing inconsistent workbench or editor-state colors
- reviewing `tokenColors` and `semanticTokenColors`
- checking dark/light parity
- validating theme keys against official VS Code docs

## Working Mode

1. Scan the repo.
Look for `DESIGN.md`, `themes/*.json`, `package.json`, and any existing theme scripts.

2. Choose the source of truth.
If `DESIGN.md` exists, treat it as the local contract. Call out:
- where theme files diverge from the design intent
- where the design intent itself seems weak or incomplete
- which `DESIGN.md` section each important finding maps to
- which `Review Checklist` items still need visual confirmation
If repository design guidance conflicts with generic skill defaults, follow the repository document.

3. Validate keys before judging them.
Use `references/official-sources.md` before saying a workbench color key is wrong, missing, or obsolete.

4. Review in this order:
- workbench/UI colors
- editor states
- `tokenColors`
- `semanticTokenColors`
- dark/light parity

## Fast Heuristics

- Repeated low-alpha fills across several editor states usually indicate collapsed hierarchy.
- Brackets are a system: inactive guides can be subtle, but active guides and bracket-match cues must still read clearly.
- Missing or commented-out semantic roles usually mean missing intent, not intentional minimalism.
- Near-mirrored dark/light theme files may justify consolidating shared logic if hand maintenance becomes error-prone.

## If You Are Auditing

- Use `scripts/audit-theme.ts` for a quick structural scan before manual review.
- Prefer `--design-doc=DESIGN.md` so findings can cite repository design sections.
- Use `--format=summary` for a short report and `--format=json` only when another script needs machine-readable output.
- Use the response shape in `references/output-format.md` unless the user asks for a different format.

## Hard Rules

- Preserve palette identity unless the user asked for a redesign.
- Update dark and light variants together unless the task is explicitly single-variant.
- Prefer `DESIGN.md` over ad hoc inference when it exists.
- Prefer repository design rules over generic reference defaults when they conflict.
- Prefer official VS Code docs over memory for color-key validation.
- Use `references/role-model.md` as a generic vocabulary aid, not as a repository-specific design spec.
- Use `references/review-checklist.md` as a generic review index; use the repository checklist as the final standard when one exists.
- If the user reports a bug, map the complaint back to concrete theme keys before changing colors.

## References

- `references/review-checklist.md`: generic review dimensions
- `references/official-sources.md`: official VS Code sources
- `references/role-model.md`: generic role vocabulary
- `references/output-format.md`: default response structure
