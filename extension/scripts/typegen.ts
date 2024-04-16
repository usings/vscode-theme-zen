import type { JSONSchema } from 'json-schema-to-typescript-lite'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { compile } from 'json-schema-to-typescript-lite'
import { kebabCase } from 'scule'

const schemas = [
  {
    schema: `https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/main/resources/vscode/schemas/token-styling.json`,
    name: 'SemanticTokens',
  },
  {
    schema: `https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/main/resources/vscode/schemas/textmate-colors.json`,
    name: 'TextmateColors',
  },
  {
    schema: `https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/main/resources/vscode/schemas/workbench-colors.json`,
    name: 'WorkbenchColors',
  },
]

const banner = [
  '/**',
  ' * This file was automatically generated.',
  ' * ‼️ DO NOT MODIFY THIS FILE ‼️.',
  ' */',
].join('\n')

for (const { schema, name } of schemas) {
  const responded = await fetch(schema).then(res => res.json()) as JSONSchema

  const definitions = await compile(responded, name, {
    additionalProperties: false,
    unreachableDefinitions: false,
    strictIndexSignatures: false,
  })

  const content = [
    banner,
    '',
    definitions,
    '',
  ].join('\n')

  const outdir = join(process.cwd(), 'themes/types')
  await mkdir(outdir, { recursive: true })
  await writeFile(join(outdir, `${kebabCase(name)}.d.ts`), content)
}
