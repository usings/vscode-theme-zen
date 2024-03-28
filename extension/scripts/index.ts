import { mkdir, writeFile } from 'node:fs/promises'
import { exit } from 'node:process'
import { fileURLToPath } from 'node:url'
import { defineTheme } from './define'

function resolved(path: string) {
  return fileURLToPath(new URL(path, import.meta.url))
}
async function compiler(output: string, content: object) {
  await writeFile(resolved(output), JSON.stringify(content, null, 2))
}

await mkdir(resolved('../themes'), { recursive: true })
  .then(() => Promise.all(
    [
      compiler('../themes/zen.json', defineTheme({ type: 'dark', name: 'Zen' })),
    ],
  ))
  .catch(() => exit(1))
