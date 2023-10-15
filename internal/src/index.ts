import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { exit } from 'node:process'
import { generateTheme } from '@/theme'

const resolved = (path: string) => fileURLToPath(new URL(path, import.meta.url))

mkdir(resolved('../themes'), { recursive: true })
  .then(() => Promise.all([
    writeFile(
      resolved('../themes/zen.json'),
      `${JSON.stringify(generateTheme({
        type: 'dark',
        name: 'Zzz',
      }), undefined, 2)}\n`,
    ),
  ]))
  .catch(() => exit(1))
