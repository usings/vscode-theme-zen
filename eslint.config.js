import { defineConfig } from '@witheslint/core'

export default defineConfig({
  ignores: [
    '**/node_modules',
    '**/dist',
    '**/languages',
    '**/.idea',
  ],
})
