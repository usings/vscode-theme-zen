# Design System

This file is the repository-level source of truth for the Zen theme's color decisions.

`themes/dark.json` and `themes/light.json` contain the final implementation.
This document explains the intended role boundaries, state hierarchy, and dark/light mapping so future edits can be reviewed against a stable design model.
If a generic review skill or checklist suggests a conflicting default, this document wins.

## Goals

- Keep the theme calm and restrained rather than loud or high-saturation.
- Preserve semantic meaning across dark and light variants.
- Keep editor states clearly layered so selection, current line, search, and symbol highlights do not collapse together.
- Prefer a small number of reusable color families with consistent meaning.

## Priority Rules

When design rules conflict, resolve them in this order:

1. Preserve legibility and state clarity.
2. Preserve stable role meaning across the theme.
3. Preserve dark/light parity by hue family and interaction intent.
4. Preserve ecosystem conventions only when they do not break the first three rules.

Examples:

- If a traditional ANSI slot name makes a light terminal less readable, prefer the more legible rendered result.
- If a language-specific convention suggests a new hue but an existing role already fits, keep the existing role.
- If a visually interesting accent weakens selection, find-match, or error clarity, reduce the accent rather than the state signal.

## Color Families

### Neutral

Use neutrals for surfaces, text hierarchy, borders, and low-emphasis structure.

- dark surfaces: `#050505`, `#0F0F0F`
- dark text hierarchy: `#BCBCBC`, `#8A8A8A`, `#6C6C6C`
- light surfaces: `#F5F5F5`, `#FAFAFA`
- light text hierarchy: `#404040`, `#757575`, `#939393`

### Accent and Semantic Families

Assign each hue family a stable purpose:

- accent cyan/teal:
  primary interaction, cursor, active borders, editor/terminal active selection, accepted or resolved states
- info blue:
  type-like structure, info states, secondary emphasis, modified resources
- parameter quiet-cyan:
  parameters and supporting code structure that should stay quieter than types and keywords
- property purple:
  properties, enum members, object keys, secondary code structure
- string magenta:
  string literals and inline textual emphasis
- variable rose/pink:
  language variables such as `this` or `self`, debug values, color symbols, blockquotes
- function amber:
  callable symbols and numeric literals
- directive green:
  macros, directives, special annotations
- warning gold:
  decorators, warnings, inline caution states, find-match/search highlights
- conflict orange:
  unresolved merge conflicts and conflict-heavy SCM states
- error red:
  invalid code, diagnostics, error states

When a concrete token or UI element does not fit neatly into one semantic family, role meaning takes priority over language-specific convention. Avoid creating a new hue rule just for one framework, file type, or tool if an existing role already fits.

## Palette Inventory

Use this section as the exact palette reference when changing concrete values.
The usage column is illustrative, not normative. Treat it as examples of current usage, not permission to override the role model.
Palette families are grouped by hue, so they are not a one-to-one mapping to the semantic families above. A single hue bucket can contain distinct roles such as conflict orange, warning gold, function amber, and component emphasis.

### Dark Base Palette

| Color Family | Color | Usage |
| ------------ | ----- | ----- |
| **Neutral Gray** | `#000000` | Transparent black base for shadow suppression and invisible edges |
| **Neutral Gray** | `#050505` | Base background for panels, sidebar, terminal, widgets |
| **Neutral Gray** | `#0F0F0F` | Editor background, inputs, dropdowns, hover states |
| **Neutral Gray** | `#2D2D2D` | Blocks and raised neutral surfaces |
| **Neutral Gray** | `#5F5F5F` | Borders, inactive UI, low-contrast foreground |
| **Neutral Gray** | `#6C6C6C` | Placeholder text, de-emphasized elements |
| **Neutral Gray** | `#8A8A8A` | Inactive foreground, icons, soft accents, line numbers |
| **Neutral Gray** | `#BCBCBC` | Primary text foreground |
| **Neutral Gray** | `#C3C5C9` | Semantic variable foreground, foreground-adjacent but distinct from default text |
| **Neutral Gray** | `#FFFFFF` | Maximum contrast highlights, focused text |
| **Blue-Cyan** | `#6AB8C0` | Regex highlighting, git renamed resources, and other quiet cyan/info-adjacent accents |
| **Blue-Cyan** | `#5CA7AE` | Parameter quiet-cyan when the parameter semantic role is enabled |
| **Blue-Cyan** | `#71A3EF` | Type parameters |
| **Blue-Cyan** | `#81D2CE` | Primary accent family |
| **Blue-Cyan** | `#87C3FF` | Types, interfaces, info states, modified resources |
| **Purple/Violet** | `#BBAAFF` | Properties, enum members, keys |
| **Purple/Violet** | `#E394DC` | Strings |
| **Rose/Pink** | `#CC7C8A` | Language variables such as `this` or `self` |
| **Rose/Pink** | `#DD99AA` | Debug tokens, color symbols, blockquotes |
| **Warm Yellow/Orange** | `#DD9A6A` | Conflict-heavy UI states and unresolved merge conflicts |
| **Warm Yellow/Orange** | `#E09B70` | Framework or component identifiers when they need function-adjacent emphasis |
| **Warm Yellow/Orange** | `#E7D38F` | Warnings, decorators, inline values |
| **Warm Yellow/Orange** | `#EBC88D` | Functions, methods, numeric constants |
| **Green** | `#A8CC7C` | Directives, macros, CSS important, and other explicit annotation-like roles |
| **Red** | `#FF8787` | Error foregrounds, invalid tokens |

### Light Base Palette

| Color Family | Color | Usage |
| ------------ | ----- | ----- |
| **Neutral Gray** | `#FFFFFF` | Transparent white base for shadow suppression and invisible edges |
| **Neutral Gray** | `#FAFAFA` | Editor background, inputs, dropdowns, hover states |
| **Neutral Gray** | `#F5F5F5` | Base background for panels, sidebar, terminal, widgets |
| **Neutral Gray** | `#D8D8D8` | Blocks and raised neutral surfaces |
| **Neutral Gray** | `#A0A0A0` | Borders, inactive UI, low-contrast foreground |
| **Neutral Gray** | `#939393` | Placeholder text, de-emphasized elements |
| **Neutral Gray** | `#757575` | Inactive foreground, icons, soft accents, line numbers |
| **Neutral Gray** | `#525252` | Semantic variable foreground, foreground-adjacent but distinct from default text |
| **Neutral Gray** | `#404040` | Primary text foreground |
| **Neutral Gray** | `#000000` | Maximum contrast highlights, focused text |
| **Blue-Cyan** | `#0891B2` | Regex highlighting, git renamed resources, and other quiet cyan/info-adjacent accents |
| **Blue-Cyan** | `#0F7C8F` | Parameter quiet-cyan when the parameter semantic role is enabled |
| **Blue-Cyan** | `#2563EB` | Type parameters |
| **Blue-Cyan** | `#0D9488` | Primary accent family |
| **Blue-Cyan** | `#0369A1` | Types, interfaces, info states, modified resources |
| **Purple/Violet** | `#7C3AED` | Properties, enum members, keys |
| **Purple/Violet** | `#A21CAF` | Strings |
| **Rose/Pink** | `#BE123C` | Language variables such as `this` or `self` |
| **Rose/Pink** | `#BE185D` | Debug tokens, color symbols, blockquotes |
| **Warm Yellow/Orange** | `#C2410C` | Conflict-heavy UI states and unresolved merge conflicts |
| **Warm Yellow/Orange** | `#CA8A04` | Warnings, decorators, inline values |
| **Warm Yellow/Orange** | `#D97706` | Functions, methods, numeric constants |
| **Green** | `#16A34A` | Directives, macros, CSS important, and other explicit annotation-like roles |
| **Red** | `#DC2626` | Error foregrounds, invalid tokens |

### Terminal Palette

Keep the terminal ANSI palette aligned with the overall semantic families while preserving legibility in terminal contexts.
For light terminal neutrals, prioritize the rendered result against the terminal background over traditional ANSI naming intuition. In other words, the slot called `ansiBlack` does not need to be the darkest available neutral if that would disappear into the surface.

Dark:
- black `#18191B`
- red `#EC5D6F`
- bright red `#E1465E`
- green `#409D78`
- bright green `#169068`
- yellow `#E5BF8C`
- bright yellow `#CD984D`
- blue `#4B8DEC`
- bright blue `#2A7DEB`
- magenta `#B174D9`
- bright magenta `#A660D4`
- cyan `#82D2CE`
- bright cyan `#779E9E`
- white `#C3C5C9`
- bright black `#898E94`
- bright white `#BCBCBC`

Light:
- black `#939393`
- red `#DC2626`
- bright red `#B91C1C`
- green `#059669`
- bright green `#047857`
- yellow `#D97706`
- bright yellow `#B45309`
- blue `#2563EB`
- bright blue `#1D4ED8`
- magenta `#9333EA`
- bright magenta `#7E22CE`
- cyan `#0891B2`
- bright cyan `#0E7490`
- white `#404040`
- bright black `#757575`
- bright white `#000000`

Terminal interaction rules:
- terminal cursor should stay in the accent family.
- terminal active selection should follow the same accent language as editor active selection.
- terminal active selection may need a stronger overlay than editor selection because terminal glyphs rely more heavily on cell background separation.
- terminal inactive selection should remain visible and neutral, not disappear back into the background.
- in light themes, ANSI neutral slots must stay readable against the terminal background; do not let `ansiBlack` collapse into the surface color.

### Workbench Role Mapping

Workbench colors should preserve the same semantic model as editor tokens, but they can use quieter neutral selection for repeated list-like controls.

- editor and terminal active selection use the accent family.
- global selection and list-like selection may use neutral overlays when accent would make dense UI feel too loud.
- added and untracked resources use the accent family.
- modified resources use the info blue family.
- deleted resources use the error red family.
- unresolved conflicts use conflict orange; handled or accepted conflict states use the accent family.
- find-match and search highlights use warning gold, including editor, terminal, peek, minimap, and overview ruler markers.
- chart colors should follow their label when the chart itself communicates semantic categories. Workbench green may intentionally fold into the accent family when the state means success, accepted, resolved, or primary action rather than directive syntax.
- foregrounds on filled status items should be chosen by rendered contrast, not by theme type alone. Strong accent and warning fills may need the deepest neutral foreground even in dark themes, and light warning fills should use the deepest neutral foreground rather than white.

## Role Model

These role names should remain stable even if concrete hex values change.
`global-selection` names the UI context for app-wide/list-like selection. `selection-neutral` names the visual treatment often used for that context when accent selection would be too loud.

- `foreground`
- `foreground-strong`
- `foreground-muted`
- `surface-base`
- `surface-raised`
- `border-subtle`
- `accent`
- `info`
- `property`
- `parameter`
- `variable`
- `string`
- `function`
- `directive`
- `warning`
- `error`
- `type`
- `type-parameter`
- `number`
- `regexp`
- `global-selection`
- `terminal-cursor`
- `terminal-selection-active`
- `terminal-selection-inactive`
- `terminal-find-match`
- `selection-related`
- `selection-neutral`
- `current-line`
- `fold-region`
- `bracket-match`
- `bracket-guide`

## Editor State Hierarchy

Editor states must stay visually distinct in this order:

1. `find-match`
2. `selection-active`
3. `selection-related`
4. `word-highlight`
5. `current-line`
6. `fold-region`

Rules:

- `selection-active` must be stronger than `selection-inactive`.
- `selection-active` must not equal `current-line`.
- `editor.selectionBackground` and `terminal.selectionBackground` should use the accent family; global UI selection may be quieter and neutral.
- `word-highlight` and `find-match` must not share the same color.
- `find-match` should prefer the warning/gold family so explicit search results do not blur into the accent-colored selection layer.
- `current-line` should be visible but quieter than explicit user actions.
- `snippet-tabstop` should read as temporary structure, not as search or selection.
- bracket guides and bracket highlights should stay neutral and low-drama; use the gray family unless there is a strong structural reason to introduce hue.

## Syntax and Semantic Intent

The theme should preserve the following semantic distinctions when the relevant semantic tokens are enabled:

- types vs functions vs properties
- parameters vs variables
- readonly/default-library symbols vs regular symbols
- strings vs regex vs numbers

Variables should stay foreground-adjacent and calm, but they should not be identical to the default foreground when semantic highlighting is enabled.
Parameters should be distinct from both variables and macros when the parameter role is enabled. Prefer a quieter cyan/info-family treatment over the directive green family.
Parameters should also stay quieter than types, type parameters, and keywords. They should read as supporting structure, not as primary emphasis.
Readonly and default-library modifiers are desired distinctions, but they may remain disabled until they can be introduced without colliding with the existing type, keyword, and property families.
Regex and numbers should remain distinguishable from strings and functions even when they share adjacent warm or cool families.

If `semanticHighlighting` is enabled, semantic roles should reinforce structure rather than collapse into the default foreground.

## Dark/Light Mapping

Dark and light variants should not be literal inversions. They should preserve role meaning.

Examples:

- dark accent `#81D2CE` maps to light accent `#0D9488`
- dark type/info blue maps to light type/info blue
- dark property purple maps to light property purple
- dark function amber maps to light function amber

The exact values can differ, but the same role should stay in the same hue family unless there is a strong reason to change it.

## Opacity Ladder

Opacity is part of the design system, not just an implementation detail.

- `FF`: solid surfaces and strongest text
- `E6`: primary readable foregrounds and strong accents
- `CC`: hover-strength accents
- `B3`: medium emphasis
- `99`: low-emphasis structure
- `80`: visible but soft decoration
- `66`: active guides and secondary overlays
- `4D`: borders and outlines
- `33`: background highlights
- `1A`: ghost or subtle background fills

Avoid using the same low-alpha neutral for multiple unrelated editor states.
Recommended defaults for common states:

- `selection-active`: usually `40` to `66`
- `global-selection`: usually `26` to `40`
- `selection-inactive`: usually `1A` to `33`
- `find-match`: usually `40` to `66`, and not weaker than `selection-active`
- `word-highlight` and `range-highlight`: usually `1A` to `33`
- `current-line` and `fold-region`: usually `08` to `1A`
- bracket guides: usually `1F` to `33`
- active bracket guides: usually `66`
- terminal active selection: may use `66` when `40` is too weak in practice

This opacity ladder is intended to preserve consistent depth and quietness across both dark and light themes.

## Change Policy

When changing the theme:

1. Update the intended role in this file first if the semantic meaning changes.
2. Then update `themes/dark.json` and `themes/light.json`.
3. Review dark/light parity after every change.
4. Validate against the official VS Code theme color reference for workbench color IDs.
5. Treat issue-driven fixes as a chance to check the whole state layer, not just one key.

## Review Checklist

Before finalizing a color change, manually confirm:

- active and inactive selection are still clearly distinct in both editor and terminal
- find-match is still stronger than generic highlight states
- bracket match and bracket guides still read as structure without stealing focus
- semantic roles still separate types, functions, properties, parameters, variables, numbers, and regex
- terminal ANSI neutrals still read correctly against the terminal background, especially in the light theme
- dark and light variants still preserve the same role meaning, even when exact hex values differ
