/**
 * Default folder icon associations
 * Keys are icon file basenames (without folder_ prefix)
 */
const folderIcons: Record<string, {
  folderNames?: Array<string>
}> = {}

const { folderNames } = Object.entries(folderIcons).reduce(
  ({ folderNames }, [name, icon]) => ({
    folderNames: {
      ...folderNames,
      ...icon.folderNames?.reduce((a, c) => ({ ...a, [c]: `folder_${name}` }), {}),
    },
  }),
  {
    folderNames: {},
  },
)

export { folderIcons, folderNames }
