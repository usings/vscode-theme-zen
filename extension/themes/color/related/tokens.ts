import type { TextmateColors } from '@/types'
import { base, comments, go, html, markdown, rust, vue, xml, yaml } from './token'

export function getTokenColors(): TextmateColors {
  return [
    base,
    comments,
    go,
    html,
    markdown,
    rust,
    vue,
    xml,
    yaml,
  ].flat()
}
