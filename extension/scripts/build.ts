import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd, exit } from 'node:process'
import { defineThemeColor, defineThemeIcon } from '~/themes'

const root = cwd()

async function compiler(output: string, content: object) {
  await writeFile(join(root, output), JSON.stringify(content, undefined, 2))
}

await mkdir(join(root, 'meta'), { recursive: true })
  .then(async () =>
    Promise.all(
      [
        compiler('meta/icon-dark.json', await defineThemeIcon('dark')),
        compiler('meta/color-dark.json', defineThemeColor('dark')),
      ],
    ))
  .catch(() => exit(1))
