import type { ThemeFlavor, VscIconTheme } from '@/types'
import { basename, join, relative } from 'node:path'
import { globby } from 'globby'
import { fileExtensions, fileNames, folderNames, languageIds } from './related'

export async function defineThemeIcon(type: ThemeFlavor): Promise<VscIconTheme> {
  const iconDefinitions = await getIconDefinitions(type)

  return {
    hidesExplorerArrows: false,
    languageIds,
    iconDefinitions,
    rootFolder: '_root',
    rootFolderExpanded: undefined,
    folder: '_folder',
    folderNames,
    folderExpanded: undefined,
    folderNamesExpanded: undefined,
    file: '_file',
    fileNames,
    fileExtensions,
  }
}

async function getIconDefinitions(type: ThemeFlavor) {
  const cwd = join(process.cwd(), `assets/icons/${type}`)
  const rawIconNames = await globby('**/*.svg', { cwd })

  const iconDefinitions = await Promise.all(rawIconNames.map((icon) => {
    const name = basename(icon, '.svg')
    const path = join(relative(icon, cwd), icon)
    return { [name]: { iconPath: path } }
  }))
  return Object.assign({}, ...iconDefinitions)
}
