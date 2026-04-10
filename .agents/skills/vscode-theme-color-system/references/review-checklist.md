# Theme Review Checklist

Use this checklist when the user asks for a thorough review, a consistency pass, or a generator refactor.

## Repository Scan

- Find theme entrypoints such as `themes/dark.json` and `themes/light.json`.
- Find TypeScript or Node build scripts, if any.
- Find README sections that describe palette or color philosophy.
- Check whether the repository already documents a source-of-truth file.
- If `DESIGN.md` includes a `Review Checklist`, use it as the repository-specific final pass.
- Check the official theme color reference before concluding that a workbench key is missing or obsolete.

## Editor State Layering

Review these keys together instead of one by one:

- `selection.background`
- `editor.selectionBackground`
- `editor.inactiveSelectionBackground`
- `editor.selectionHighlightBackground`
- `editor.wordHighlightBackground`
- `editor.wordHighlightStrongBackground`
- `editor.lineHighlightBackground`
- `editor.rangeHighlightBackground`
- `editor.foldBackground`
- `editor.snippetTabstopHighlightBackground`
- `editor.snippetFinalTabstopHighlightBackground`
- `editor.findMatchBackground`
- `editor.findMatchHighlightBackground`

Look for:

- too many states sharing the same fill
- active and inactive states being too similar
- selection and current-line states colliding
- find matches being weaker than generic highlights

## Bracket and Structural Guidance

Review:

- `editorBracketHighlight.foreground1..6`
- `editorBracketPairGuide.background1..6`
- `editorBracketPairGuide.activeBackground1..6`
- `editorBracketMatch.background`
- `editorBracketMatch.border`

Look for:

- bracket highlights and guides all collapsing without a stronger active state
- active guides not standing apart from inactive guides
- bracket match being weaker than nearby decorations

## Syntax and Semantic Coverage

Review both `tokenColors` and `semanticTokenColors`.

Look for:

- semantic roles that collapse back to the default foreground
- missing coverage for `parameter`, `property`, `type`, `typeParameter`, `macro`, `decorator`
- missing modifiers such as `*.readonly`, `*.defaultLibrary`, `*.deprecated`
- TextMate scopes that contradict semantic roles

## Dark/Light Parity

Check whether:

- the same role uses the same hue family across variants
- contrast intent is preserved even when actual hex values differ
- accent, info, warning, error, type, function, property, and string roles map cleanly across both variants

## Generator Extraction Cues

Prefer adding a generator if any of these are true:

- dark and light themes mirror each other structurally
- many color assignments are repeated by role
- maintenance requires editing dozens of keys in two files
- the README describes a color philosophy that is not encoded anywhere

## Safe Refactor Shape

When extracting a generator:

1. Keep `themes/*.json` as the build output.
2. Store palette and role definitions in a small TypeScript or Node script.
3. Isolate editors states, bracket ladder, token roles, and semantic roles into separate builder functions.
4. Add one rebuild command to `package.json`.
5. Re-run generation before finalizing changes.
