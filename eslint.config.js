import { defineConfig } from 'witheslint'

export default defineConfig({
  ignores: [
    '**/node_modules',
    '**/dist',
    '**/languages',
    '**/.idea',
  ],
  extends: [
    {
      rules: {
        'unicorn/import-style': 'off',
      },
    },
  ],
})
