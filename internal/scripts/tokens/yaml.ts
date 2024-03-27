export const patcherYAML = () => ([
  {
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: '#BBBBBBDD',
    },
  },
  {
    scope: ['string.unquoted.plain.out.yaml'],
    settings: {
      foreground: '#AF9CFFDD',
    },
  },
])
