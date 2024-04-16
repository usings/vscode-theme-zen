import type { SemanticTokens } from './semantic-tokens'
import type { TextmateColors } from './textmate-colors'
import type { WorkbenchColors } from './workbench-colors'

export type * from './semantic-tokens'
export type * from './textmate-colors'
export type * from './workbench-colors'

/**
 * Theme flavor.
 */
export type ThemeFlavor = 'dark' | 'light'

/**
 * Icon name/path mapping.
 * @see https://code.visualstudio.com/api/extension-guides/file-icon-theme#icon-definitions
 */
export type IconDefinitions = Record<string, { iconPath: string }>

/**
 * Icon theme respecting VSC schema.
 * @see https://code.visualstudio.com/api/extension-guides/file-icon-theme#file-association
 */
export interface VscIconTheme {
  hidesExplorerArrows: boolean
  iconDefinitions: IconDefinitions
  languageIds: Record<string, string>
  rootFolder: string
  rootFolderExpanded?: string
  folder: string
  folderNames: Record<string, string>
  folderExpanded?: string
  folderNamesExpanded?: Record<string, string>
  file: string
  fileNames: Record<string, string>
  fileExtensions: Record<string, string>
}

/**
 * Color theme respecting VSC schema.
 * @see https://code.visualstudio.com/api/extension-guides/color-theme
 */
export interface VscColorTheme {
  name: string
  type: ThemeFlavor
  colors: WorkbenchColors
  semanticHighlighting: boolean
  semanticTokenColors: SemanticTokens
  tokenColors: TextmateColors
}
