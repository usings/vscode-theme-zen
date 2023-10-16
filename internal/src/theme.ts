export function generateTheme({ type, name }) {
  return {
    type,
    name,
    colors: {
      // Base Colors
      'focusBorder': '#00000000',
      'foreground': '#7f7f7f',
      'disabledForeground': '#6c6c6c',
      'widget.shadow': '#00000000',
      'selection.background': '#363636',
      'sash.hoverBorder': '#505050',
      // Text colors
      'textCodeBlock.background': '#292929',
      'textLink.activeForeground': '#66b395',
      'textLink.foreground': '#66b395cc',
      // Action colors
      'toolbar.hoverBackground': '#292929',
      // Button control
      'button.foreground': '#000000EE',
      'button.background': '#66b3957f',
      'button.hoverBackground': '#66b395aa',
      // Dropdown control
      'dropdown.background': '#050505',
      'dropdown.border': '#ffffff1f',
      // Input control
      'input.background': '#ffffff07',
      'input.border': '#ffffff1f',
      'inputOption.activeBackground': '#292929',
      'inputOption.activeForeground': '#ffffff',
      'inputOption.activeBorder': '#6c6c6c',
      // Scrollbar control
      'scrollbar.shadow': '#00000000',
      'scrollbarSlider.activeBackground': '#ffffff3f',
      'scrollbarSlider.background': '#ffffff1f',
      'scrollbarSlider.hoverBackground': '#ffffff2f',
      // Badge
      'badge.background': '#ffffff1f',
      'badge.foreground': '#aaaaaa',
      // Progress bar
      'progressBar.background': '#dddddd',
      // List and trees
      'list.activeSelectionBackground': '#0f0f0f',
      'list.dropBackground': '#ffffff1f',
      'list.focusBackground': '#ffffff1f',
      'list.focusHighlightForeground': '#66b395',
      'list.focusOutline': '#ffffff1f',
      'list.highlightForeground': '#66b395',
      'list.hoverBackground': '#0f0f0f',
      'list.inactiveSelectionBackground': '#0f0f0f',
      'list.filterMatchBackground': '#66b39530',
      'list.filterMatchBorder': '#66b395',
      // Activity Bar
      'activityBar.background': '#050505',
      'activityBar.foreground': '#aaaaaa',
      'activityBar.border': '#ffffff1f',
      'activityBarBadge.foreground': '#222222',
      'activityBarBadge.background': '#999999',
      'activityBar.activeBorder': '#66b395',
      // Side bar
      'sideBar.background': '#050505',
      'sideBar.border': '#ffffff1f',
      'sideBarSectionHeader.background': '#050505',
      'sideBarSectionHeader.border': '#ffffff1f',
      // Minimap
      'minimap.findMatchHighlight': '#66b3959f',
      'minimap.selectionHighlight': '#7098d49f',
      'minimap.errorHighlight': '#ff8787',
      'minimap.background': '#111111',
      'minimapSlider.background': '#ffffff1f',
      'minimapSlider.hoverBackground': '#ffffff27',
      'minimapSlider.activeBackground': '#ffffff37',
      // Editor colors
      'editorOverviewRuler.border': '#00000000',
      // Editor Groups & Tabs
      'editorGroupHeader.tabsBackground': '#050505',
      'editorGroupHeader.tabsBorder': '#ffffff1f',
      'tab.activeBackground': '#0d0d0d',
      'tab.activeBorderTop': '#66b395',
      'tab.inactiveBackground': '#050505',
      'tab.border': '#ffffff1f',
      // Editor colors
      'editor.background': '#0d0d0d',
      'editor.foreground': '#dddddd',
      'editorLineNumber.foreground': '#555555',
      'editorLineNumber.activeForeground': '#cccccc',
      'editorCursor.foreground': '#66b395',
      'editor.selectionBackground': '#ffffff1f',
      'editor.selectionHighlightBorder': '#ffffff3f',
      'editor.wordHighlightBackground': '#ffffff1f',
      'editor.wordHighlightStrongBackground': '#ffffff1f',
      'editor.findMatchBackground': '#66b3954f',
      'editor.findMatchHighlightBackground': '#66b3952f',
      'editor.findMatchHighlightBorder': '#66b3955f',
      'editor.findMatchBorder': '#66b395',
      'searchEditor.findMatchBorder': '#66b395',
      'editor.hoverHighlightBackground': '#ffffff1f',
      'editor.lineHighlightBackground': '#212121',
      'editorLink.activeForeground': '#66b395',
      'editorWhitespace.foreground': '#ffffff1f',
      'editorIndentGuide.background': '#ffffff1f',
      'editorIndentGuide.activeBackground': '#ffffff3f',
      'editorInlayHint.background': '#ffffff1f',
      'editorInlayHint.foreground': '#ffffff6f',
      /// Codelens
      'editorCodeLens.foreground': '#555555',
      /// Bracket pair colorization
      'editorBracketHighlight.foreground1': '#aaaaaa7f',
      'editorBracketHighlight.foreground2': '#9999997f',
      'editorBracketHighlight.foreground3': '#8888887f',
      'editorBracketHighlight.foreground4': '#9999997f',
      /// Errors and warnings
      'editorError.foreground': '#ff8787',
      'editorWarning.foreground': '#e7d38f',
      'editorInfo.foreground': '#7098d4',
      /// The gutter contains the glyph margins and the line numbers
      'editorGutter.modifiedBackground': '#7098d47f',
      'editorGutter.addedBackground': '#66b3954f',
      'editorGutter.deletedBackground': '#ff87877f',
      // Diff editor colors
      'diffEditor.insertedTextBackground': '#66b39530',
      'diffEditor.removedTextBackground': '#ff878730',
      'diffEditor.border': '#ffffff1f',
      'diffEditor.diagonalFill': '#ffffff1f',
      'diffEditor.insertedLineBackground': '#66b39530',
      'diffEditor.removedLineBackground': '#ff878730',
      // Editor widget colors
      'editorWidget.background': '#181818',
      'editorSuggestWidget.background': '#0a0a0a',
      'editorSuggestWidget.selectedBackground': '#292929',
      'editorStickyScrollHover.background': '#292929',
      // Peek view colors
      'peekView.border': '#444444',
      'peekViewEditor.background': '#292929',
      'peekViewEditor.matchHighlightBackground': '#66b3953f',
      'peekViewEditor.matchHighlightBorder': '#66b395',
      'peekViewResult.matchHighlightBackground': '#66b3953f',
      'peekViewResult.selectionBackground': '#66b3953f',
      'peekViewResult.background': '#242424',
      'peekViewTitle.background': '#292929',
      'peekViewEditorStickScroll.background': '#292929',
      // Merge conflicts colors
      'merge.currentHeaderBackground': '#66b3957f',
      'merge.currentContentBackground': '#66b3953f',
      'merge.incomingHeaderBackground': '#7098d47f',
      'merge.incomingContentBackground': '#7098d43f',
      // Panel colors
      'panel.background': '#050505',
      // Status bar colors
      'statusBar.background': '#050505',
      'statusBar.foreground': '#777777',
      'statusBar.border': '#ffffff1f',
      'statusBar.debuggingBackground': '#66b395',
      'statusBar.debuggingForeground': '#000000',
      'statusBar.noFolderBackground': '#0d0d0d',
      'statusBar.noFolderForeground': '#777777',
      'statusBar.focusBorder': '#00000000',
      'statusBarItem.prominentBackground': '#66b395',
      'statusBarItem.prominentForeground': '#000000',
      'statusBarItem.remoteBackground': '#66b395',
      'statusBarItem.remoteForeground': '#000000',
      'statusBarItem.errorBackground': '#ff8787',
      'statusBarItem.errorForeground': '#000000',
      'statusBarItem.warningBackground': '#d8b544',
      'statusBarItem.warningForeground': '#000000',
      // Title bar colors
      'titleBar.activeBackground': '#050505',
      'titleBar.inactiveBackground': '#0d0d0d',
      'titleBar.border': '#ffffff1f',
      // Menu bar colors
      'menu.foreground': '#bbbbbb',
      'menu.background': '#050505',
      'menu.separatorBackground': '#ffffff1f',
      // Command Center colors
      'commandCenter.activeBackground': '#ffffff1f',
      'commandCenter.border': '#ffffff1f',
      // Banner colors
      'banner.foreground': '#dddddd',
      'banner.background': '#292929',
      // Quick picker colors
      'pickerGroup.foreground': '#66b395',
      'quickInput.background': '#050505',
      // Integrated Terminal colors
      'terminal.background': '#050505',
      'terminal.foreground': '#707080',
      'terminal.ansiBlack': '#292929',
      'terminal.ansiBlue': '#7789a3',
      'terminal.ansiBrightBlack': '#393939',
      'terminal.ansiBrightBlue': '#8799b3',
      'terminal.ansiBrightCyan': '#799a9e',
      'terminal.ansiBrightGreen': '#95a8a1',
      'terminal.ansiBrightMagenta': '#9e8aa3',
      'terminal.ansiBrightRed': '#bd9696',
      'terminal.ansiBrightWhite': '#bdbdbd',
      'terminal.ansiBrightYellow': '#c3ba9f',
      'terminal.ansiCyan': '#698a8e',
      'terminal.ansiGreen': '#859891',
      'terminal.ansiMagenta': '#8e7a93',
      'terminal.ansiRed': '#ad8686',
      'terminal.ansiWhite': '#adadad',
      'terminal.ansiYellow': '#b3aa8f',
      'terminal.selectionBackground': '#292929',
      'terminal.tab.activeBorder': '#aaaaaa',
      // Git colors
      'gitDecoration.addedResourceForeground': '#66b395',
      'gitDecoration.modifiedResourceForeground': '#e7d38f',
      'gitDecoration.deletedResourceForeground': '#ff8787',
      'gitDecoration.renamedResourceForeground': '#6ab8c0',
      'gitDecoration.ignoredResourceForeground': '#ffffff3f',
      'gitDecoration.conflictingResourceForeground': '#dd9a6a',
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
          foreground: '#d4d4d4',
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
          foreground: '#5fb5be',
        },
      },
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
        ],
        settings: {
          foreground: '#ffffff39',
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
          foreground: '#ffffff5f',
        },
      },
      {
        scope: 'constant.language',
        settings: {
          foreground: '#f6c177',
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
          foreground: '#f6c177',
        },
      },
      {
        scope: 'constant.regexp',
        settings: {
          foreground: '#f6c177',
        },
      },
      {
        scope: [
          'entity.name.tag',
          'entity.name.tag.css',
          'support.class.component',
        ],
        settings: {
          foreground: '#ed9cc2',
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: '#5fb5be',
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
          foreground: '#5fb5be',
        },
      },
      {
        scope: 'invalid',
        settings: {
          foreground: '#d2aaaa',
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
          foreground: '#5fb5be',
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
          foreground: '#b6b6b6',
        },
      },
      {
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
          foreground: '#74ccaa',
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: '#b6b6b6',
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
          foreground: '#a0a0a0',
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: '#74ccaa',
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: '#ff8787',
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: '#5fb5be',
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: '#5fb5be',
        },
      },
      {
        scope: 'markup.inline.raw',
        settings: {
          foreground: '#f6c177',
        },
      },
      {
        scope: [
          'meta.preprocessor',
          'entity.name.function.preprocessor',
        ],
        settings: {
          foreground: '#5fb5be',
        },
      },
      {
        scope: 'meta.preprocessor.string',
        settings: {
          foreground: '#74ccaa',
        },
      },
      {
        scope: 'meta.preprocessor.numeric',
        settings: {
          foreground: '#f6c177',
        },
      },
      {
        scope: 'meta.structure.dictionary.key.python',
        settings: {
          foreground: '#b6b6b6',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: '#5fb5be',
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
          foreground: '#74ccaa',
        },
      },
      {
        scope: 'string.tag',
        settings: {
          foreground: '#74ccaa',
        },
      },
      {
        scope: 'string.value',
        settings: {
          foreground: '#74ccaa',
        },
      },
      {
        scope: 'string.regexp',
        settings: {
          foreground: '#f6c177',
        },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: [
          'meta.template.expression',
        ],
        settings: {
          foreground: '#d4d4d4',
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
          foreground: '#b6b6b6',
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
          foreground: '#83d6c5',
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
          foreground: '#83d6c5',
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
          foreground: '#5fb5be',
        },
      },
      {
        scope: 'constant.sha.git-rebase',
        settings: {
          foreground: '#f6c177',
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
          foreground: '#74ccaa',
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
          foreground: '#5fb5be',
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
          foreground: '#5fb5be',
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
          foreground: '#5fb5be',
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
          foreground: '#ed9cc2',
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
          foreground: '#b6b6b6',
        },
      },
      {
        name: 'Constants and enums',
        scope: [
          'variable.other.constant',
          'variable.other.enummember',
        ],
        settings: {
          foreground: '#b6b6b6',
        },
      },
      {
        name: 'Object keys, TS grammar specific',
        scope: [
          'meta.object-literal.key',
        ],
        settings: {
          foreground: '#a3a3a3',
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
          foreground: '#74ccaa',
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
          foreground: '#74ccaa',
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
          foreground: '#f6c177',
        },
      },
      {
        scope: [
          'keyword.operator.or.regexp',
          'keyword.control.anchor.regexp',
        ],
        settings: {
          foreground: '#5fb5be',
        },
      },
      {
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: '#5fb5be',
        },
      },
      {
        scope: 'constant.character',
        settings: {
          foreground: '#f6c177',
        },
      },
      {
        scope: 'constant.character.escape',
        settings: {
          foreground: '#5fb5be',
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
      stringLiteral: '#74ccaa',
      customLiteral: '#f6c177',
      numberLiteral: '#f6c177',
    },
  }
}
