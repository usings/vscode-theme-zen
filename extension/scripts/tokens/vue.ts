export const patcherVue = () => ([
  {
    scope: [
      'entity.other.attribute-name.html.vue',
    ],
    settings: {
      foreground: '#81D2CEDD',
    },
  },
  {
    scope: [
      'punctuation.definition.tag.begin.html.vue',
      'punctuation.definition.tag.end.html.vue',
    ],
    settings: {
      foreground: '#F1B800BB',
      fontStyle: 'bold',
    },
  },
  {
    scope: [
      'entity.name.tag.script.html.vue',
      'entity.name.tag.template.html.vue',
      'entity.name.tag.style.html.vue',
    ],
    settings: {
      foreground: '#00BCAADD',
      fontStyle: 'bold',
    },
  },
])
