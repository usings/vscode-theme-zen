# Role Model

Use these names when reasoning about a VS Code theme as a system. The exact hex values can vary by theme; the role boundaries should stay clear.

## Core Semantic Roles

- `foreground`: default readable text
- `foreground-strong`: highest emphasis text
- `foreground-muted`: inactive or supporting text
- `accent`: primary interactive accent
- `info`: informational emphasis and secondary structure
- `warning`: warning and caution states
- `error`: error and invalid states
- `type`: classes, interfaces, enums, namespaces
- `type-parameter`: generic type parameters and readonly variants when needed
- `function`: functions and methods
- `property`: fields, properties, enum members, keys
- `string`: string literals and inline code spans
- `number`: numeric literals
- `regexp`: regex literals
- `directive`: macros, directives, special annotations

## Editor State Roles

- `selection-active`: active editor selection
- `selection-inactive`: inactive editor selection
- `selection-related`: related-selection or secondary selection context
- `current-line`: current line emphasis
- `word-highlight`: symbol or reference highlight
- `range-highlight`: transient highlighted range
- `find-match`: explicit search result
- `fold-region`: folded region background
- `snippet-tabstop`: transient snippet stop
- `bracket-match`: explicit matching bracket
- `bracket-ladder`: nested bracket depth structure, whether achieved by hue or restrained neutrals

## Practical Rules

- `selection-active` must stand apart from `current-line`.
- `selection-inactive` must be visibly weaker than `selection-active`.
- `word-highlight` should not be confused with search matches.
- `find-match` should usually be stronger than `word-highlight`.
- `type`, `function`, and `property` should each be distinguishable in dense code.
- `foreground`, `variable`, and `property` should not collapse into one tone unless the theme is intentionally minimal and the user explicitly wants that tradeoff.
