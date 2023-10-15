import { base, token } from '@/configs'

export function generateTheme({ type, name }) {
  return {
    type,
    name,
    colors: base,
    tokenColors: token,
    semanticHighlighting: true,
    semanticTokenColors: {
      newOperator: '#707080',
      stringLiteral: '#74ccaa',
      customLiteral: '#f6c177',
      numberLiteral: '#f6c177',
    },
  }
}
