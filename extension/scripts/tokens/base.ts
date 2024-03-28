export const patcherBase = () => ([
  {
    scope: ['source'],
    settings: {
      foreground: '#BBBBBBDD',
    },
  },
  {
    scope: [
      'constant.language',
    ],
    settings: {
      foreground: '#81D2CEDD',
    },
  },
  {
    scope: [
      'constant.numeric',
    ],
    settings: {
      foreground: '#EBC88DBB',
    },
  },
  {
    scope: [
      'variable.language.this',
      'variable.language.super',
      'variable.language.self',
      'variable.language.special.self',
      'keyword.operator.new',
    ],
    settings: {
      foreground: '#BBBBBBAA',
      fontStyle: 'bold',
    },
  },
  {
    scope: [
      'string.quoted',
      'string.template',
      'string.unquoted.plain',
    ],
    settings: {
      // foreground: '#E394DCDD',
      foreground: '#DD99AADD',
    },
  },
  {
    scope: [
      'string.regexp',
    ],
    settings: {
      foreground: '#5DB4BDCC',
    },
  },
  {
    scope: [
      'keyword.control',
      'keyword.operator.ternary',
      'punctuation.accessor',
      'storage.modifier',
      'storage.type',
    ],
    settings: {
      foreground: '#BBBBBB99',
    },
  },
  {
    scope: [
      'keyword.control.at-rule',
      'keyword.control.directive',
    ],
    settings: {
      foreground: '#A8CC7CDD',
    },
  },
  {
    scope: [
      'keyword.other',
      'keyword.control.as',
      'keyword.control.export',
      'keyword.control.flow',
      'keyword.control.loop',
      'keyword.control.for',
      'keyword.control.trycatch',
      'keyword.control.conditional',
      'keyword.control.shell',
      'keyword.control.then',
      'keyword.control.else',
      'keyword.control.do',
      'keyword.control.return',
    ],
    settings: {
      foreground: '#81D2CEDD',
    },
  },
  {
    scope: [
      'keyword.operator.arithmetic',
      'keyword.operator.assignment',
      'keyword.operator.comparison',
      'keyword.operator.expression',
      'keyword.operator.logical',
      'keyword.operator.optional',
      'keyword.operator.relational',
      'keyword.operator.type',
    ],
    settings: {
      foreground: '#BBBBBB99',
    },
  },
  {
    scope: [
      'meta.type.annotation',
      'meta.type.parameters',
      'entity.name.tag',
      'entity.name.type',
      'entity.name.type.class',
      'entity.name.type.interface',
      'entity.name.type.module',
      'entity.other.inherited-class',
    ],
    settings: {
      foreground: '#86C0FFEE',
    },
  },
  {
    scope: [
      'entity.name.type.class',
      'entity.name.type.interface',
      'entity.name.type.module',
      'entity.other.inherited-class',
    ],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: [
      'meta.definition.property',
      'meta.definition.variable',
      'support.variable.property',
    ],
    settings: {
      foreground: '#AF9CFFDD',
    },
  },
  {
    scope: [
      'meta.function-call',
      'meta.embedded.line',
      'meta.parameter-expansion',
    ],
    settings: {
      foreground: '#BBBBBBDD',
    },
  },
  {
    scope: [
      'meta.method.declaration',
      'meta.function-call.generic',
      'entity.name.function',
      'support.function',
    ],
    settings: {
      foreground: '#EECC88DD',
    },
  },
  {
    scope: [
      'meta.brace.square',
      'meta.brace.round',
    ],
    settings: {
      foreground: '#BBBBBB99',
    },
  },
  {
    scope: [
      'punctuation.definition',
    ],
    settings: {
      foreground: '#BBBBBB77',
    },
  },
  {
    scope: [
      'punctuation.definition.tag',
    ],
    settings: {
      foreground: '#BBBBBBBB',
    },
  },
  {
    scope: [
      'punctuation.definition.table',
    ],
    settings: {
      foreground: '#81D2CEDD',
    },
  },
  {
    scope: [
      'markup.italic',
      'markup.quote',
    ],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: [
      'markup.bold',
    ],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: [
      'markup.strikethrough',
    ],
    settings: {
      fontStyle: 'strikethrough',
    },
  },
  {
    scope: [
      'meta.separator',
      'markup.fenced_code.block',
    ],
    settings: {
      foreground: '#81D2CEDD',
    },
  },
  {
    scope: [
      'markup.list.unnumbered',
      'entity.name.variable.property',
    ],
    settings: {
      foreground: '#AF9CFFDD',
    },
  },
])
