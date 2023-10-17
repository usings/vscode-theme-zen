export function generateTheme({ type, name }) {
  return {
    type,
    name,
    colors: {
      // Base Colors
      'focusBorder': '#00000000',
      'foreground': '#7F7F7F',
      'disabledForeground': '#6C6C6C',
      'widget.shadow': '#00000000',
      'selection.background': '#363636',
      'sash.hoverBorder': '#505050',
      // Text colors
      'textCodeBlock.background': '#292929',
      'textLink.activeForeground': '#66B395',
      'textLink.foreground': '#66B395CC',
      // Action colors
      'toolbar.hoverBackground': '#292929',
      // Button control
      'button.border': '#00000000',
      'button.foreground': '#000000EE',
      'button.background': '#66B395AA',
      'button.hoverBackground': '#66B395CC',
      // Dropdown control
      'dropdown.background': '#050505',
      'dropdown.border': '#FFFFFF11',
      // Input control
      'input.background': '#FFFFFF07',
      'input.border': '#FFFFFF11',
      'inputOption.activeBackground': '#292929',
      'inputOption.activeForeground': '#ffffff',
      'inputOption.activeBorder': '#6C6C6C',
      // Scrollbar control
      'scrollbar.shadow': '#00000000',
      'scrollbarSlider.activeBackground': '#FFFFFF3F',
      'scrollbarSlider.background': '#FFFFFF11',
      'scrollbarSlider.hoverBackground': '#FFFFFF2F',
      // Badge
      'badge.background': '#FFFFFF11',
      'badge.foreground': '#AAAAAA',
      // Progress bar
      'progressBar.background': '#DDDDDD',
      // List and trees
      'list.activeSelectionBackground': '#0F0F0F',
      'list.dropBackground': '#FFFFFF11',
      'list.focusBackground': '#FFFFFF11',
      'list.focusHighlightForeground': '#66B395',
      'list.focusOutline': '#FFFFFF11',
      'list.highlightForeground': '#66B395',
      'list.hoverBackground': '#0F0F0F',
      'list.inactiveSelectionBackground': '#0F0F0F',
      'list.filterMatchBackground': '#66B39530',
      'list.filterMatchBorder': '#66B395',
      // Activity Bar
      'activityBar.background': '#050505',
      'activityBar.foreground': '#AAAAAA',
      'activityBar.border': '#FFFFFF11',
      'activityBarBadge.foreground': '#222222',
      'activityBarBadge.background': '#999999',
      'activityBar.activeBorder': '#66B395',
      // Side bar
      'sideBar.background': '#050505',
      'sideBar.border': '#FFFFFF11',
      'sideBarSectionHeader.background': '#050505',
      'sideBarSectionHeader.border': '#FFFFFF11',
      // Minimap
      'minimap.findMatchHighlight': '#66B3959F',
      'minimap.selectionHighlight': '#7098D49F',
      'minimap.errorHighlight': '#FF8787',
      'minimap.background': '#111111',
      'minimapSlider.background': '#FFFFFF11',
      'minimapSlider.hoverBackground': '#FFFFFF27',
      'minimapSlider.activeBackground': '#FFFFFF37',
      // Editor colors
      'editorOverviewRuler.border': '#00000000',
      // Editor Groups & Tabs
      'editorGroupHeader.tabsBackground': '#050505',
      'editorGroupHeader.tabsBorder': '#FFFFFF11',
      'tab.activeBackground': '#0D0D0D',
      'tab.activeBorderTop': '#66B395',
      'tab.inactiveBackground': '#050505',
      'tab.border': '#FFFFFF11',
      // Editor colors
      'editor.background': '#0D0D0D',
      'editor.foreground': '#DDDDDD',
      'editorLineNumber.foreground': '#555555',
      'editorLineNumber.activeForeground': '#CCCCCC',
      'editorCursor.foreground': '#66B395',
      'editor.selectionBackground': '#FFFFFF11',
      'editor.selectionHighlightBorder': '#FFFFFF3F',
      'editor.wordHighlightBackground': '#FFFFFF11',
      'editor.wordHighlightStrongBackground': '#FFFFFF11',
      'editor.findMatchBackground': '#66B3954F',
      'editor.findMatchHighlightBackground': '#66B3952F',
      'editor.findMatchHighlightBorder': '#66B3955F',
      'editor.findMatchBorder': '#66B395',
      'searchEditor.findMatchBorder': '#66B395',
      'editor.hoverHighlightBackground': '#FFFFFF11',
      'editor.lineHighlightBackground': '#212121',
      'editorLink.activeForeground': '#66B395',
      'editorWhitespace.foreground': '#FFFFFF11',
      'editorIndentGuide.background': '#FFFFFF11',
      'editorIndentGuide.activeBackground': '#FFFFFF3F',
      'editorInlayHint.background': '#FFFFFF11',
      'editorInlayHint.foreground': '#FFFFFF6F',
      /// Codelens
      'editorCodeLens.foreground': '#555555',
      /// Bracket pair colorization
      'editorBracketHighlight.foreground1': '#AAAAAA77',
      'editorBracketHighlight.foreground2': '#99999977',
      'editorBracketHighlight.foreground3': '#88888877',
      'editorBracketHighlight.foreground4': '#77777777',
      'editorBracketHighlight.foreground5': '#66666677',
      'editorBracketHighlight.foreground6': '#55555577',
      /// Errors and warnings
      'editorError.foreground': '#FF8787',
      'editorWarning.foreground': '#E7D38F',
      'editorInfo.foreground': '#7098D4',
      /// The gutter contains the glyph margins and the line numbers
      'editorGutter.modifiedBackground': '#7098D47F',
      'editorGutter.addedBackground': '#66B3954F',
      'editorGutter.deletedBackground': '#FF87877F',
      // Diff editor colors
      'diffEditor.insertedTextBackground': '#66B39530',
      'diffEditor.removedTextBackground': '#FF878730',
      'diffEditor.border': '#FFFFFF11',
      'diffEditor.diagonalFill': '#FFFFFF11',
      'diffEditor.insertedLineBackground': '#66B39530',
      'diffEditor.removedLineBackground': '#FF878730',
      // Editor widget colors
      'editorWidget.background': '#181818',
      'editorSuggestWidget.background': '#0A0A0A',
      'editorSuggestWidget.selectedBackground': '#292929',
      'editorStickyScrollHover.background': '#292929',
      // Peek view colors
      'peekView.border': '#444444',
      'peekViewEditor.background': '#292929',
      'peekViewEditor.matchHighlightBackground': '#66B3953F',
      'peekViewEditor.matchHighlightBorder': '#66B395',
      'peekViewResult.matchHighlightBackground': '#66B3953F',
      'peekViewResult.selectionBackground': '#66B3953F',
      'peekViewResult.background': '#242424',
      'peekViewTitle.background': '#292929',
      'peekViewEditorStickScroll.background': '#292929',
      // Merge conflicts colors
      'merge.currentHeaderBackground': '#66B3957F',
      'merge.currentContentBackground': '#66B3953F',
      'merge.incomingHeaderBackground': '#7098D47F',
      'merge.incomingContentBackground': '#7098D43F',
      // Panel colors
      'panel.background': '#050505',
      // Status bar colors
      'statusBar.background': '#050505',
      'statusBar.foreground': '#777777',
      'statusBar.border': '#FFFFFF11',
      'statusBar.debuggingBackground': '#66B395',
      'statusBar.debuggingForeground': '#000000',
      'statusBar.noFolderBackground': '#0D0D0D',
      'statusBar.noFolderForeground': '#777777',
      'statusBar.focusBorder': '#00000000',
      'statusBarItem.prominentBackground': '#66B395',
      'statusBarItem.prominentForeground': '#000000',
      'statusBarItem.remoteBackground': '#66B395',
      'statusBarItem.remoteForeground': '#000000',
      'statusBarItem.errorBackground': '#ff8787',
      'statusBarItem.errorForeground': '#000000',
      'statusBarItem.warningBackground': '#D8B544',
      'statusBarItem.warningForeground': '#000000',
      // Title bar colors
      'titleBar.activeBackground': '#050505',
      'titleBar.inactiveBackground': '#0d0d0d',
      'titleBar.border': '#FFFFFF11',
      // Menu bar colors
      'menu.foreground': '#BBBBBB',
      'menu.background': '#050505',
      'menu.separatorBackground': '#FFFFFF11',
      // Command Center colors
      'commandCenter.activeBackground': '#FFFFFF11',
      'commandCenter.border': '#FFFFFF11',
      // Banner colors
      'banner.foreground': '#DDDDDD',
      'banner.background': '#292929',
      // Quick picker colors
      'pickerGroup.foreground': '#66B395',
      'quickInput.background': '#050505',
      // Integrated Terminal colors
      'terminal.background': '#050505',
      'terminal.foreground': '#707080',
      'terminal.ansiBlack': '#292929',
      'terminal.ansiBlue': '#7789A3',
      'terminal.ansiBrightBlack': '#393939',
      'terminal.ansiBrightBlue': '#8799B3',
      'terminal.ansiBrightCyan': '#799A9E',
      'terminal.ansiBrightGreen': '#95A8A1',
      'terminal.ansiBrightMagenta': '#9E8AA3',
      'terminal.ansiBrightRed': '#BD9696',
      'terminal.ansiBrightWhite': '#BDBDBD',
      'terminal.ansiBrightYellow': '#C3BA9F',
      'terminal.ansiCyan': '#698A8E',
      'terminal.ansiGreen': '#859891',
      'terminal.ansiMagenta': '#8E7A93',
      'terminal.ansiRed': '#AD8686',
      'terminal.ansiWhite': '#ADADAD',
      'terminal.ansiYellow': '#B3AA8F',
      'terminal.selectionBackground': '#292929',
      'terminal.tab.activeBorder': '#AAAAAA',
      // Git colors
      'gitDecoration.addedResourceForeground': '#66B395',
      'gitDecoration.modifiedResourceForeground': '#E7D38F',
      'gitDecoration.deletedResourceForeground': '#FF8787',
      'gitDecoration.renamedResourceForeground': '#6AB8C0',
      'gitDecoration.ignoredResourceForeground': '#FFFFFF3F',
      'gitDecoration.conflictingResourceForeground': '#DD9A6A',
      // Breadcrumbs colors
      'breadcrumb.foreground': '#666666',
    },
    tokenColors: [
      {
        scope: [
          'meta.embedded',
          'source.groovy.embedded',
          'string meta.image.inline.markdown',
        ],
        settings: {
          foreground: '#D4D4D4',
        },
      },
      {
        scope: 'emphasis',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: 'strong',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        scope: 'header',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
        ],
        settings: {
          foreground: '#FFFFFF39',
        },
      },
      {
        scope: [
          'punctuation.definition',
          'punctuation.definition.quote.begin.markdown',
          'punctuation.definition.tag',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: '#FFFFFF5F',
        },
      },
      {
        scope: 'constant.language',
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        scope: [
          'constant.numeric',
          'variable.other.enummember',
          'keyword.operator.plus.exponent',
          'keyword.operator.minus.exponent',
        ],
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        scope: 'constant.regexp',
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        scope: [
          'entity.name.tag',
          'entity.name.tag.css',
          'support.class.component',
        ],
        settings: {
          foreground: '#ED9CC2',
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: [
          'entity.other.attribute-name.class.css',
          'entity.other.attribute-name.class.mixin.css',
          'entity.other.attribute-name.id.css',
          'entity.other.attribute-name.parent-selector.css',
          'entity.other.attribute-name.pseudo-class.css',
          'entity.other.attribute-name.pseudo-element.css',
          'source.css.less entity.other.attribute-name.id',
          'entity.other.attribute-name.scss',
        ],
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'invalid',
        settings: {
          foreground: '#D2AAAA',
        },
      },
      {
        scope: 'markup.underline',
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        scope: 'string.other.link',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'markup.underline.link',
        settings: {
          foreground: '#808080',
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: '#B6B6B6',
        },
      },
      {
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
          foreground: '#74CCAA',
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: '#B6B6B6',
        },
      },
      {
        scope: 'markup.strikethrough',
        settings: {
          fontStyle: 'strikethrough',
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: '#A0A0A0',
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: '#FF8787',
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'markup.inline.raw',
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        scope: [
          'meta.preprocessor',
          'entity.name.function.preprocessor',
        ],
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'meta.preprocessor.string',
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        scope: 'meta.preprocessor.numeric',
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        scope: 'meta.structure.dictionary.key.python',
        settings: {
          foreground: '#B6B6B6',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'storage',
        settings: {
          foreground: '#707080',
        },
      },
      {
        scope: 'storage.type',
        settings: {
          foreground: '#707080',
        },
      },
      {
        scope: [
          'storage.modifier',
          'keyword.operator.noexcept',
        ],
        settings: {
          foreground: '#707080',
        },
      },
      {
        scope: [
          'string',
          'meta.embedded.assembly',
          'punctuation.definition.string',
        ],
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        scope: 'string.tag',
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        scope: 'string.value',
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        scope: 'string.regexp',
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: [
          'meta.template.expression',
        ],
        settings: {
          foreground: '#D4D4D4',
        },
      },
      {
        scope: [
          'support.type.vendored.property-name',
          'support.type.property-name',
          'variable.css',
          'variable.scss',
          'variable.other.less',
          'source.coffee.embedded',
        ],
        settings: {
          foreground: '#B6B6B6',
        },
      },
      {
        scope: 'keyword',
        settings: {
          foreground: '#707080',
        },
      },
      {
        scope: 'keyword.control',
        settings: {
          foreground: '#707080',
        },
      },
      {
        scope: 'keyword.operator',
        settings: {
          foreground: '#707080',
        },
      },
      {
        name: 'Keywords',
        scope: 'keyword',
        settings: {
          foreground: '#83D6C5',
        },
      },
      {
        scope: [
          'keyword.operator.new',
          'keyword.operator.expression',
          'keyword.operator.cast',
          'keyword.operator.sizeof',
          'keyword.operator.alignof',
          'keyword.operator.typeid',
          'keyword.operator.alignas',
          'keyword.operator.instanceof',
          'keyword.operator.logical.python',
          'keyword.operator.wordlike',
          'keyword.operator.assignment.compound',
        ],
        settings: {
          foreground: '#83D6C5',
        },
      },
      {
        scope: 'keyword.other.unit',
        settings: {
          foreground: '#707080',
        },
      },
      {
        scope: [
          'punctuation.section.embedded.begin.php',
          'punctuation.section.embedded.end.php',
        ],
        settings: {
          foreground: '#707080',
        },
      },
      {
        scope: 'support.function.git-rebase',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'constant.sha.git-rebase',
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        name: 'coloring of the Java import and package identifiers',
        scope: [
          'storage.modifier.import.java',
          'variable.language.wildcard.java',
          'storage.modifier.package.java',
        ],
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        name: 'this.self',
        scope: 'variable.language',
        settings: {
          fontStyle: 'italic',
          foreground: '#707080',
        },
      },
      {
        name: 'Function declarations',
        scope: [
          'entity.name.function',
          'support.function',
          'support.constant.handlebars',
          'source.powershell variable.other.member',
          'entity.name.operator.custom-literal', // See https://en.cppreference.com/w/cpp/language/user_literal
        ],
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        name: 'Types declaration and references',
        scope: [
          'support.class',
          'support.type',
          'entity.name.type',
          'entity.name.namespace',
          'entity.other.attribute',
          'entity.name.scope-resolution',
          'entity.name.class',
          'storage.type.numeric.go',
          'storage.type.byte.go',
          'storage.type.boolean.go',
          'storage.type.string.go',
          'storage.type.uintptr.go',
          'storage.type.error.go',
          'storage.type.rune.go',
          'storage.type.cs',
          'storage.type.generic.cs',
          'storage.type.modifier.cs',
          'storage.type.variable.cs',
          'storage.type.annotation.java',
          'storage.type.generic.java',
          'storage.type.java',
          'storage.type.object.array.java',
          'storage.type.primitive.array.java',
          'storage.type.primitive.java',
          'storage.type.token.java',
          'storage.type.groovy',
          'storage.type.annotation.groovy',
          'storage.type.parameters.groovy',
          'storage.type.generic.groovy',
          'storage.type.object.array.groovy',
          'storage.type.primitive.array.groovy',
          'storage.type.primitive.groovy',
        ],
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        name: 'Types declaration and references, TS grammar specific',
        scope: [
          'meta.type.cast.expr',
          'meta.type.new.expr',
          'support.constant.math',
          'support.constant.dom',
          'support.constant.json',
          'entity.other.inherited-class',
        ],
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        name: 'Control flow / Special keywords',
        scope: [
          'keyword.control',
          'source.cpp keyword.operator.new',
          'keyword.operator.delete',
          'keyword.other.using',
          'keyword.other.operator',
          'entity.name.operator',
        ],
        settings: {
          foreground: '#707080',
        },
      },
      {
        name: 'Highlight',
        scope: [
          'keyword.control.flow',
          'keyword.control.export',
        ],
        settings: {
          foreground: '#ED9CC2',
        },
      },
      {
        name: 'Variable and parameter name',
        scope: [
          'variable',
          'meta.definition.variable.name',
          'support.variable',
          'entity.name.variable',
          'constant.other.placeholder', // placeholders in strings
        ],
        settings: {
          foreground: '#B6B6B6',
        },
      },
      {
        name: 'Constants and enums',
        scope: [
          'variable.other.constant',
          'variable.other.enummember',
        ],
        settings: {
          foreground: '#B6B6B6',
        },
      },
      {
        name: 'Object keys, TS grammar specific',
        scope: [
          'meta.object-literal.key',
        ],
        settings: {
          foreground: '#A3A3A3',
        },
      },
      {
        name: 'CSS property value',
        scope: [
          'support.constant.property-value',
          'support.constant.font-name',
          'support.constant.media-type',
          'support.constant.media',
          'constant.other.color.rgb-value',
          'constant.other.rgb-value',
          'support.constant.color',
        ],
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        name: 'Regular expression groups',
        scope: [
          'punctuation.definition.group.regexp',
          'punctuation.definition.group.assertion.regexp',
          'punctuation.definition.character-class.regexp',
          'punctuation.character.set.begin.regexp',
          'punctuation.character.set.end.regexp',
          'keyword.operator.negation.regexp',
          'support.other.parenthesis.regexp',
        ],
        settings: {
          foreground: '#74CCAA',
        },
      },
      {
        scope: [
          'constant.character.character-class.regexp',
          'constant.other.character-class.set.regexp',
          'constant.other.character-class.regexp',
          'constant.character.set.regexp',
        ],
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        scope: [
          'keyword.operator.or.regexp',
          'keyword.control.anchor.regexp',
        ],
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'constant.character',
        settings: {
          foreground: '#F6C177',
        },
      },
      {
        scope: 'constant.character.escape',
        settings: {
          foreground: '#5FB5BE',
        },
      },
      {
        scope: 'entity.name.label',
        settings: {
          foreground: '#C8C8C8',
        },
      },
    ],
    semanticHighlighting: true,
    semanticTokenColors: {
      newOperator: '#707080',
      stringLiteral: '#74CCAA',
      customLiteral: '#F6C177',
      numberLiteral: '#F6C177',
    },
  }
}
