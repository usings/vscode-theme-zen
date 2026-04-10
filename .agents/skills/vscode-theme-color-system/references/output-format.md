# Default Output Format

Use this structure unless the user asks for a different format.

## Findings

List the highest-priority issues first.
When possible, group them by:

- `official-keys`
- `editor-states`
- `brackets`
- `semantic`
- `parity`
- `general`

For each finding, include:

- why it matters
- which category it belongs to
- which `DESIGN.md` section it maps to, if the repository defines one
- which role or state is colliding or missing
- the concrete keys involved
- the affected files

## System View

Explain the pattern behind the findings, such as:

- editor states collapsing into one layer
- semantic roles not expressing enough structure
- dark and light themes drifting from the same role model
- repeated hand-authored assignments that should be generated

## Recommended Changes

Separate:

- immediate fixes
- structural refactors

If code was changed, say:

- whether the theme is still hand-authored or now generated
- which files were changed
- which validations ran
- what still needs visual verification in VS Code
- which items remain open from `DESIGN.md`'s `Review Checklist`, if present

## One-Line Summary

End with one short sentence describing the overall direction, for example:

`The palette identity stays the same, but state hierarchy and maintainability are now much clearer.`

## Short Summary Mode

When the audit is run with `--format=summary`, keep the output brief:

- one line for total issue count and category count
- up to three top issues
- include the `DESIGN.md` section name when available
- mention any remaining `Review Checklist` items only if they are still unresolved
