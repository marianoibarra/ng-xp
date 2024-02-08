import { DesktopIcon } from "../models/DesktopIcon.model";

export const DESKTOP_ICONS: DesktopIcon[] = [
  new DesktopIcon('Papelera de reciclaje', 'recicle.png', () => {console.log('Papelera de reciclaje')}),
  new DesktopIcon('Mi PC', 'computer.png', () => {console.log('Mi PC')}),
  new DesktopIcon('Red', 'network.png', () => {console.log('Red')}),
  new DesktopIcon('Vacaciones 2003.png', 'picture.png', () => {console.log('Vacaciones 2003.png')}),
  new DesktopIcon('Vacaciones 2003 (1).png', 'picture.png', () => {console.log('Vacaciones 2003 (1).png')}),
  new DesktopIcon('Vacaciones 2003 (2).png', 'picture.png', () => {console.log('Vacaciones 2003 (2).png')}),
  new DesktopIcon('Vacaciones 2003 con un nombre larguisimo (3).png', 'picture.png', () => {console.log('Vacaciones 2003 con un nombre larguisimo (3).png')}),
]