import { Component, HostBinding } from '@angular/core';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { UserSettingsService } from '../services/user-settings.service';
import { wallpapers } from '../utils/config';
import { DESKTOP_ICONS } from '../data/desktop.data';
import { DesktopIcon } from '../models/DesktopIcon.model';
import { CdkContextMenuTrigger, CdkMenuItem, CdkMenu} from '@angular/cdk/menu';

@Component({
  selector: 'xp-desktop',
  standalone: true,
  imports: [TaskbarComponent, CdkContextMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {
  constructor(
    private userSettings: UserSettingsService
  ) {}

  @HostBinding('style.backgroundImage') get wallpaper() {
    const index = this.userSettings.getSetting('wallpaper')
    const { filename } = wallpapers[index]
    return `url("/assets/wallpapers/${filename}")`
  }

  desktopIcons: DesktopIcon[] = DESKTOP_ICONS
  selected: DesktopIcon[] = []
  pivotElementOnRangeSelection?: DesktopIcon

  onClick(item: DesktopIcon, event: MouseEvent): void {
    event.stopPropagation()
    if(this.selected.length === 0) {
      this.pivotElementOnRangeSelection = item 
    }

    if(event.ctrlKey) {
      this.toggleSelection(item);
      return;
    }

    if(event.shiftKey && this.selected.length > 0) {
      this.selectRange(item);
      return;
    }

    this.pivotElementOnRangeSelection = item
    this.selected = [item]
  }

  deselectAll(): void {
    this.pivotElementOnRangeSelection = undefined
    this.selected = []
  }


  private toggleSelection(item: DesktopIcon): void {
    if(this.selected.includes(item)) {
      this.selected = this.selected.filter(sel => sel !== item)
    } else {
      this.selected.push(item)
    }
  }

  private selectRange(item: DesktopIcon): void {
    const indexOfPivot = this.desktopIcons.indexOf(this.pivotElementOnRangeSelection!);
    const indexOfSelection = this.desktopIcons.indexOf(item);
  
    if (this.isValidIndex(indexOfPivot) && this.isValidIndex(indexOfSelection)) {
      const start = Math.min(indexOfPivot, indexOfSelection);
      const end = Math.max(indexOfPivot, indexOfSelection) + 1;
      this.selected = this.desktopIcons.slice(start, end);
    }
  }

  private isValidIndex(index: number): boolean {
    return index >= 0 && index < this.desktopIcons.length;
  }
}
