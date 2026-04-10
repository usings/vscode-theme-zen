import fs from "node:fs";
import path from "node:path";

type ThemeFile = {
  colors?: Record<string, string>;
  tokenColors?: Array<Record<string, unknown>>;
  semanticHighlighting?: boolean;
  semanticTokenColors?: Record<string, unknown>;
};

type IssueCategory =
  | "official-keys"
  | "editor-states"
  | "brackets"
  | "semantic"
  | "parity"
  | "general";

type AuditIssue = {
  category: IssueCategory;
  severity: "high" | "medium" | "low";
  message: string;
  details: string[];
  files?: string[];
  designSection?: string;
  designReference?: string;
};

type AuditOptions = {
  officialSource?: string;
  designDoc?: string;
  format: "text" | "json" | "summary";
};

const editorStateKeys = [
  "editor.selectionBackground",
  "editor.inactiveSelectionBackground",
  "editor.selectionHighlightBackground",
  "editor.wordHighlightBackground",
  "editor.wordHighlightStrongBackground",
  "editor.wordHighlightTextBackground",
  "editor.lineHighlightBackground",
  "editor.rangeHighlightBackground",
  "editor.foldBackground",
  "editor.snippetTabstopHighlightBackground",
  "editor.snippetFinalTabstopHighlightBackground",
  "editor.findMatchBackground",
  "editor.findMatchHighlightBackground",
] as const;

const bracketKeys = [
  "editorBracketHighlight.foreground1",
  "editorBracketHighlight.foreground2",
  "editorBracketHighlight.foreground3",
  "editorBracketHighlight.foreground4",
  "editorBracketHighlight.foreground5",
  "editorBracketHighlight.foreground6",
] as const;

const bracketGuideKeys = [
  "editorBracketPairGuide.background1",
  "editorBracketPairGuide.background2",
  "editorBracketPairGuide.background3",
  "editorBracketPairGuide.background4",
  "editorBracketPairGuide.background5",
  "editorBracketPairGuide.background6",
] as const;

const activeBracketGuideKeys = [
  "editorBracketPairGuide.activeBackground1",
  "editorBracketPairGuide.activeBackground2",
  "editorBracketPairGuide.activeBackground3",
  "editorBracketPairGuide.activeBackground4",
  "editorBracketPairGuide.activeBackground5",
  "editorBracketPairGuide.activeBackground6",
] as const;

const semanticExpectations = [
  "parameter",
  "property",
  "variable",
  "type",
  "typeParameter",
  "*.readonly",
  "*.defaultLibrary",
  "*.deprecated",
] as const;

function readJson(filePath: string): ThemeFile {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as ThemeFile;
}

function readText(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

function detectDesignSections(contents: string): Set<string> {
  const sections = new Set<string>();
  for (const match of contents.matchAll(/^##\s+(.+)$/gm)) {
    sections.add(match[1].trim());
  }
  return sections;
}

function designSectionName(designSections: Set<string>, preferred: string): string | undefined {
  return designSections.has(preferred) ? preferred : undefined;
}

function slugifyHeading(heading: string): string {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function designReference(docPath: string | undefined, section: string | undefined): string | undefined {
  if (!docPath || !section) {
    return undefined;
  }
  return `${docPath}#${slugifyHeading(section)}`;
}

async function readOfficialSource(source: string): Promise<string> {
  if (/^https?:\/\//.test(source)) {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`Unable to fetch official source: ${response.status} ${response.statusText}`);
    }
    return response.text();
  }

  return fs.readFileSync(source, "utf8");
}

function extractOfficialThemeColorKeys(contents: string): Set<string> {
  const keys = new Set<string>();
  const patterns = [
    /`([a-zA-Z0-9_.-]+)`/g,
    /<code>([a-zA-Z0-9_.-]+)<\/code>/g,
  ];

  for (const pattern of patterns) {
    for (const match of contents.matchAll(pattern)) {
      const candidate = match[1];
      if (candidate.includes(".") && !candidate.startsWith("workbench.")) {
        keys.add(candidate);
      }
    }
  }

  return keys;
}

function invertRecord(record: Record<string, string>): Map<string, string[]> {
  const result = new Map<string, string[]>();
  for (const [key, value] of Object.entries(record)) {
    if (!result.has(value)) {
      result.set(value, []);
    }
    result.get(value)!.push(key);
  }
  return result;
}

function alphaByte(value: string | undefined): number | null {
  if (!value) {
    return null;
  }
  const normalized = value.trim();
  if (/^#[0-9a-fA-F]{8}$/.test(normalized)) {
    return Number.parseInt(normalized.slice(7, 9), 16);
  }
  if (/^#[0-9a-fA-F]{4}$/.test(normalized)) {
    const nibble = normalized.slice(4, 5);
    return Number.parseInt(`${nibble}${nibble}`, 16);
  }
  return 255;
}

function auditTheme(
  themePath: string,
  theme: ThemeFile,
  designSections: Set<string>,
  designDocPath?: string
): AuditIssue[] {
  const issues: AuditIssue[] = [];
  const colors = theme.colors ?? {};
  const semantic = theme.semanticTokenColors ?? {};

  const stateValues: Record<string, string> = {};
  for (const key of editorStateKeys) {
    const value = colors[key];
    if (typeof value === "string") {
      stateValues[key] = value;
    }
  }

  const repeatedStates = [...invertRecord(stateValues).entries()]
    .filter(([, keys]) => keys.length >= 3)
    .sort((a, b) => b[1].length - a[1].length);

  for (const [value, keys] of repeatedStates) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "editor-states",
      severity: keys.length >= 5 ? "high" : "medium",
      message: `Multiple editor states share ${value}`,
      details: keys,
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  const selection = colors["editor.selectionBackground"];
  const inactiveSelection = colors["editor.inactiveSelectionBackground"];
  const lineHighlight = colors["editor.lineHighlightBackground"];
  const wordHighlight = colors["editor.wordHighlightBackground"];

  if (selection && inactiveSelection && selection === inactiveSelection) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "editor-states",
      severity: "high",
      message: "Active and inactive editor selections use the same color",
      details: ["editor.selectionBackground", "editor.inactiveSelectionBackground", selection],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  const selectionAlpha = alphaByte(selection);
  if (selection && selectionAlpha !== null && selectionAlpha <= 0x26) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "editor-states",
      severity: "medium",
      message: "Editor selection may be too subtle because its alpha is very low",
      details: [`editor.selectionBackground = ${selection}`],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  if (selection && lineHighlight && selection === lineHighlight) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "editor-states",
      severity: "high",
      message: "Selection and current-line highlight share the same color",
      details: ["editor.selectionBackground", "editor.lineHighlightBackground", selection],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  if (selection && wordHighlight && selection === wordHighlight) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "editor-states",
      severity: "medium",
      message: "Selection and word highlight share the same color",
      details: ["editor.selectionBackground", "editor.wordHighlightBackground", selection],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  const bracketValues = bracketKeys
    .map((key) => colors[key])
    .filter((value): value is string => typeof value === "string");
  const bracketGuideValues = bracketGuideKeys
    .map((key) => colors[key])
    .filter((value): value is string => typeof value === "string");
  const activeBracketGuideValues = activeBracketGuideKeys
    .map((key) => colors[key])
    .filter((value): value is string => typeof value === "string");
  const distinctBracketCount = new Set(bracketValues).size;
  const distinctGuideCount = new Set(bracketGuideValues).size;
  const distinctActiveGuideCount = new Set(activeBracketGuideValues).size;
  const bracketMatchBorder = colors["editorBracketMatch.border"];
  const bracketMatchBackground = colors["editorBracketMatch.background"];
  const hasBracketMatch = typeof bracketMatchBorder === "string" || typeof bracketMatchBackground === "string";
  const activeGuidesStandApart =
    bracketGuideValues.length > 0 &&
    activeBracketGuideValues.length > 0 &&
    bracketGuideValues.some((value, index) => value !== activeBracketGuideValues[index]);

  if (
    bracketValues.length >= 2 &&
    distinctBracketCount === 1 &&
    !activeGuidesStandApart &&
    distinctGuideCount <= 1 &&
    distinctActiveGuideCount <= 1 &&
    !hasBracketMatch
  ) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "brackets",
      severity: "high",
      message: "Bracket structure is effectively disabled: highlights, guides, and match cues all collapse together",
      details: [
        ...bracketKeys,
        ...bracketGuideKeys,
        ...activeBracketGuideKeys,
        "editorBracketMatch.background",
        "editorBracketMatch.border",
      ],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  } else if (
    bracketValues.length >= 4 &&
    distinctBracketCount === 1 &&
    !activeGuidesStandApart &&
    distinctGuideCount <= 1 &&
    distinctActiveGuideCount <= 1
  ) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "brackets",
      severity: "medium",
      message: "Bracket colors are intentionally minimal but active and inactive guides do not separate",
      details: [...bracketGuideKeys, ...activeBracketGuideKeys],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  const missingSemantic = semanticExpectations.filter((key) => !(key in semantic));
  if (theme.semanticHighlighting && missingSemantic.length > 0) {
    const section = designSectionName(designSections, "Syntax and Semantic Intent");
    issues.push({
      category: "semantic",
      severity: "medium",
      message: "Semantic highlighting is enabled but key roles are missing",
      details: missingSemantic,
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  const defaultVariable = semantic["variable"];
  if (typeof defaultVariable === "object" && defaultVariable && "foreground" in defaultVariable) {
    const foreground = (defaultVariable as { foreground?: unknown }).foreground;
    if (typeof foreground === "string" && foreground === colors["editor.foreground"]) {
      const section = designSectionName(designSections, "Syntax and Semantic Intent");
      issues.push({
        category: "semantic",
        severity: "low",
        message: "Semantic variable color matches the editor foreground exactly",
        details: ["variable", "editor.foreground"],
        files: [themePath],
        designSection: section,
        designReference: designReference(designDocPath, section),
      });
    }
  }

  if (Object.keys(stateValues).length === 0) {
    const section = designSectionName(designSections, "Editor State Hierarchy");
    issues.push({
      category: "general",
      severity: "low",
      message: "No editor state colors were found in this file",
      details: [themePath],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  if (theme.semanticHighlighting && !theme.semanticTokenColors) {
    const section = designSectionName(designSections, "Syntax and Semantic Intent");
    issues.push({
      category: "semantic",
      severity: "medium",
      message: "Semantic highlighting is enabled but semantic token colors are missing",
      details: ["semanticHighlighting", "semanticTokenColors"],
      files: [themePath],
      designSection: section,
      designReference: designReference(designDocPath, section),
    });
  }

  return issues;
}

function auditOfficialThemeColorKeys(themePath: string, theme: ThemeFile, officialKeys: Set<string>): AuditIssue[] {
  const colors = theme.colors ?? {};
  const unknownKeys = Object.keys(colors)
    .filter((key) => !officialKeys.has(key))
    .sort();

  if (unknownKeys.length === 0) {
    return [];
  }

  return [
    {
      category: "official-keys",
      severity: "medium",
      message: "Workbench color keys were not found in the official theme-color reference",
      details: unknownKeys,
      files: [themePath],
      designSection: undefined,
    },
  ];
}

function compareThemes(leftPath: string, left: ThemeFile, rightPath: string, right: ThemeFile): AuditIssue[] {
  const issues: AuditIssue[] = [];
  const leftColors = left.colors ?? {};
  const rightColors = right.colors ?? {};

  const parityKeys = [
    "editor.selectionBackground",
    "editor.inactiveSelectionBackground",
    "editor.wordHighlightBackground",
    "editor.lineHighlightBackground",
    "editor.findMatchBackground",
    "editorBracketHighlight.foreground1",
    "editorBracketHighlight.foreground6",
  ];

  const missingOnEitherSide = parityKeys.filter((key) => !(key in leftColors) || !(key in rightColors));
  if (missingOnEitherSide.length > 0) {
    issues.push({
      category: "parity",
      severity: "medium",
      message: `Dark/light parity keys are missing between ${path.basename(leftPath)} and ${path.basename(rightPath)}`,
      details: missingOnEitherSide,
      files: [leftPath, rightPath],
    });
  }

  return issues;
}

function formatIssue(issue: AuditIssue): string {
  const fileLine = issue.files && issue.files.length > 0 ? ` (${issue.files.join(", ")})` : "";
  const designLine = issue.designSection
    ? ` [DESIGN.md: ${issue.designSection}${issue.designReference ? ` -> ${issue.designReference}` : ""}]`
    : "";
  return [
    `- [${issue.severity}] ${issue.message}${fileLine}${designLine}`,
    ...issue.details.map((detail) => `  ${detail}`),
  ].join("\n");
}

function groupIssues(issues: AuditIssue[]): Map<IssueCategory, AuditIssue[]> {
  const groups = new Map<IssueCategory, AuditIssue[]>();
  for (const issue of issues) {
    if (!groups.has(issue.category)) {
      groups.set(issue.category, []);
    }
    groups.get(issue.category)!.push(issue);
  }
  return groups;
}

function dedupeIssues(issues: AuditIssue[]): AuditIssue[] {
  const deduped = new Map<string, AuditIssue>();

  for (const issue of issues) {
    const key = JSON.stringify({
      category: issue.category,
      severity: issue.severity,
      message: issue.message,
      details: issue.details,
      designSection: issue.designSection,
      designReference: issue.designReference,
    });

    if (!deduped.has(key)) {
      deduped.set(key, {
        ...issue,
        files: issue.files ? [...issue.files] : [],
      });
      continue;
    }

    const existing = deduped.get(key)!;
    const mergedFiles = new Set([...(existing.files ?? []), ...(issue.files ?? [])]);
    existing.files = [...mergedFiles];
  }

  return [...deduped.values()];
}

function parseArgs(argv: string[]): { themePaths: string[]; options: AuditOptions } {
  const themePaths: string[] = [];
  const options: AuditOptions = { format: "text" };

  for (const arg of argv) {
    if (arg.startsWith("--official-source=")) {
      options.officialSource = arg.slice("--official-source=".length);
      continue;
    }
    if (arg.startsWith("--design-doc=")) {
      options.designDoc = arg.slice("--design-doc=".length);
      continue;
    }
    if (arg.startsWith("--format=")) {
      const format = arg.slice("--format=".length);
      if (format === "json" || format === "text" || format === "summary") {
        options.format = format;
        continue;
      }
    }
    themePaths.push(arg);
  }

  return { themePaths, options };
}

async function main(): Promise<void> {
  const { themePaths, options } = parseArgs(process.argv.slice(2));
  if (themePaths.length === 0) {
    console.error(
      "Usage: node --experimental-strip-types scripts/audit-theme.ts [--official-source=<url-or-file>] [--design-doc=<file>] [--format=text|json|summary] <theme.json> [more themes]"
    );
    process.exitCode = 1;
    return;
  }

  const loaded = themePaths.map((themePath) => [themePath, readJson(themePath)] as const);
  const issues: AuditIssue[] = [];
  let officialKeys: Set<string> | null = null;
  let designSections = new Set<string>();

  if (options.designDoc) {
    try {
      designSections = detectDesignSections(readText(options.designDoc));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      issues.push({
        category: "general",
        severity: "low",
        message: "Design document could not be loaded",
        details: [message],
      });
    }
  }

  if (options.officialSource) {
    try {
      const contents = await readOfficialSource(options.officialSource);
      officialKeys = extractOfficialThemeColorKeys(contents);
      if (officialKeys.size === 0) {
        issues.push({
          category: "official-keys",
          severity: "low",
          message: "Official reference was loaded but no theme color keys were parsed",
          details: [options.officialSource],
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      issues.push({
        category: "official-keys",
        severity: "low",
        message: "Official reference validation was skipped",
        details: [message],
      });
    }
  }

  for (const [themePath, theme] of loaded) {
    issues.push(...auditTheme(themePath, theme, designSections, options.designDoc));
    if (officialKeys) {
      issues.push(...auditOfficialThemeColorKeys(themePath, theme, officialKeys));
    }
  }

  if (loaded.length === 2) {
    issues.push(...compareThemes(loaded[0][0], loaded[0][1], loaded[1][0], loaded[1][1]));
  }

  if (issues.length === 0) {
    if (options.format === "json") {
      console.log(JSON.stringify({ ok: true, issues: [], categories: {} }, null, 2));
      return;
    }
    if (options.format === "summary") {
      console.log("No structural issues detected.");
      return;
    }
    console.log("No structural issues detected by the fast audit.");
    return;
  }

  const dedupedIssues = dedupeIssues(issues);
  const groups = groupIssues(dedupedIssues);
  if (options.format === "json") {
    const categories = Object.fromEntries([...groups.entries()].map(([category, grouped]) => [category, grouped]));
    console.log(JSON.stringify({ ok: false, issues: dedupedIssues, categories }, null, 2));
    return;
  }
  if (options.format === "summary") {
    const orderedCategories: IssueCategory[] = ["editor-states", "semantic", "brackets", "parity", "official-keys", "general"];
    const orderedIssues = orderedCategories.flatMap((category) => groups.get(category) ?? []);
    const topIssues = orderedIssues.slice(0, 3);
    console.log(`Found ${dedupedIssues.length} issue(s) across ${groups.size} categor${groups.size === 1 ? "y" : "ies"}.`);
    for (const issue of topIssues) {
      const section = issue.designSection ? ` [${issue.designSection}]` : "";
      console.log(`- ${issue.message}${section}`);
    }
    return;
  }

  console.log(
    `Detected ${dedupedIssues.length} issue(s) across ${groups.size} categor${groups.size === 1 ? "y" : "ies"}:`
  );
  for (const [category, groupedIssues] of groups) {
    console.log(`\n[${category}] ${groupedIssues.length} issue(s)`);
    for (const issue of groupedIssues) {
      console.log(formatIssue(issue));
    }
  }
}

void main().catch((error: unknown) => {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
});
