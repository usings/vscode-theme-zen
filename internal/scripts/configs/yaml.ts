export const patcherYAML = () => ([
  {
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: '#81D2CEDD',
    },
  },
  {
    scope: ['string.unquoted.plain.out.yaml'],
    settings: {
      foreground: '#A8B8EEDD',
    },
  },
])
