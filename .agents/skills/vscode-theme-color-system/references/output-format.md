# Default Output Format

Use this shape unless the user asks for something else.

## Full Review

1. Findings
List the highest-priority issues first. Use categories such as `official-keys`, `editor-states`, `brackets`, `semantic`, `parity`, or `general`.

For each finding, include:
- why it matters
- the missing or colliding role/state
- the concrete keys involved
- the affected files
- the matching `DESIGN.md` section, if one exists

2. System View
Explain the broader pattern behind the findings, such as collapsed editor states, weak semantic structure, dark/light drift, or repeated assignments that should be generated.

3. Recommended Changes
Separate immediate fixes from structural refactors.

If code changed, also include:
- whether the theme is still hand-authored or now generated
- which validations ran
- what still needs visual verification in VS Code
- which `Review Checklist` items remain open, if any

4. One-Line Summary
End with one short sentence describing the direction of the change.

## Summary Mode

For `--format=summary`, keep it short:
- one line for total issue count and category count
- up to three top issues
- include the `DESIGN.md` section name when available
- mention unresolved checklist items only if they still matter
