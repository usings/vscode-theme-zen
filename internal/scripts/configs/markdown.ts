export const patcherMarkdown = () => ([
  {
    scope: [
      'markup.italic.markdown',
      'markup.heading.markdown',
      'markup.heading.setext.1.markdown',
      'markup.heading.setext.2.markdown',
      'punctuation.definition.heading.markdown',
      'punctuation.definition.list.begin.markdown',
      'punctuation.definition.quote.begin.markdown',
      'punctuation.separator.table.markdown',
    ],
    settings: {
      foreground: '#A8B8EEDD',
    },
  },
])
