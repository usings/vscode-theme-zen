export const patcherComment = () => ([
  {
    scope: [
      'comment.block',
      'comment.line',
      'punctuation.definition.comment',
      'entity.name.type.instance.jsdoc',
    ],
    settings: {
      foreground: '#BBBBBB66',
    },
  },
  {
    scope: [
      'storage.type.class.jsdoc',
    ],
    settings: {
      foreground: '#BBBBBB99',
    },
  },
])
