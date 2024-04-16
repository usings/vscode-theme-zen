import type { SemanticTokens } from '@/types'

export function getSemanticTokenColors(): SemanticTokens {
  return {
    stringLiteral: '#DD99AADD',
    customLiteral: '#EBC88DBB',
    numberLiteral: '#EBC88DBB',
  }
}
