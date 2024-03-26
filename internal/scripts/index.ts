/* eslint-disable unicorn/prefer-top-level-await */
import { mkdir, writeFile } from 'node:fs/promises'
import { exit } from 'node:process'
import { fileURLToPath } from 'node:url'
import { generator } from './palette'

const resolved = (path: string) => fileURLToPath(new URL(path, import.meta.url))

mkdir(resolved('../themes'), { recursive: true })
  .then(() => Promise.all(
    [
      writeFile(resolved('../themes/zen.json'), `${JSON.stringify(generator({ type: 'dark', name: 'Zen' }), undefined, 2)}\n`),
    ],
  ))
  .catch(() => exit(1))
