# Theme Review Checklist

Use this when the user wants a thorough review, a consistency pass, or a generator refactor.

This checklist is generic. If the repository has a `DESIGN.md` checklist or stricter design rules, use those as the final standard.

## Review Dimensions

### Repository Scan

- find theme entrypoints such as `themes/dark.json` and `themes/light.json`
- find existing TypeScript or Node theme tooling
- find the repository source of truth such as `DESIGN.md`
- validate workbench color keys against the official theme color reference before judging them

### Editor State Layering

- review selection, inactive selection, related selection, word highlight, current line, fold region, and find match as one layer system
- check for collapsed states, weak hierarchy, or reused fills that hide meaning

### Brackets and Structure

- review bracket highlight, bracket guides, active guides, and bracket match together
- check whether structure is readable without stealing focus

### Syntax and Semantic Coverage

- review both `tokenColors` and `semanticTokenColors`
- check whether structural roles are expressed clearly or collapse back to the default foreground
- check whether TextMate and semantic rules contradict each other

### Dark/Light Parity

- check whether the same roles keep the same hue families and contrast intent across variants

### Generator Extraction Cues

Consider consolidating shared logic only if:
- dark and light themes mirror each other structurally
- many assignments repeat by role
- maintenance requires editing many related keys in multiple files
- the repository documents a color philosophy that is not encoded in code
