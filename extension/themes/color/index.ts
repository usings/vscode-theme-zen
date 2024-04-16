import type { ThemeFlavor, VscColorTheme } from '@/types'
import { getSemanticTokenColors, getTokenColors, getWorkbenchColors } from './related'

export function defineThemeColor(type: ThemeFlavor): VscColorTheme {
  return {
    name: `Zen ${type}`,
    type,
    colors: getWorkbenchColors(),
    tokenColors: getTokenColors(),
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokenColors(),
  }
}
