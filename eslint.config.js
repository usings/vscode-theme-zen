import { defineFlatConfig, presetBasic } from 'eslint-presets'

export default defineFlatConfig([
  presetBasic({ enableTs: true }),
  {
    rules: {
      'unicorn/prefer-top-level-await': 'off',
    },
  },
])
