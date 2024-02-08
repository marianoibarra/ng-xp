export class DesktopIcon {
  name: string
  icon: string
  open: () => any
  isShortcut: boolean
  contextMenu: ContextMenuItem[]

  constructor(name: string, icon: string, open: () => any, isShortcut?: boolean, contextMenu?: ContextMenuItem[] ) {
    this.name = name
    this.icon = icon
    this.open = open
    this.isShortcut = isShortcut || false
    this.contextMenu = contextMenu || []
  }

  rename(name: string): void {
    if(typeof name === 'string') {
      this.name = name
    }
  }
}

interface ContextMenuItem {

}