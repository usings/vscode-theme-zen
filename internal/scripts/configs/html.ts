export const patcherHTML = () => ([
  {
    scope: [
      'text.html',
      'entity.other.attribute-name',
    ],
    settings: {
      foreground: '#CCCCCCBB',
    },
  },
  {
    scope: [
      'constant.numeric.css',
      'keyword.other.unit',
    ],
    settings: {
      foreground: '#E09B70BB',
    },
  },
  {
    scope: [
      'entity.name.tag.reference',
      'entity.other.attribute-name.class',
      'punctuation.definition.entity.css',
    ],
    settings: {
      foreground: '#A8B8EEDD',
    },
  },
  {
    scope: [
      'entity.name.tag.html',
      'support.class.component',
    ],
    settings: {
      foreground: '#00BCA2DD',
      fontStyle: 'bold',
    },
  },
])
