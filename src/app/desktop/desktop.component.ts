import { Component, HostBinding } from '@angular/core';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { UserSettingsService } from '../services/user-settings.service';
import { wallpapers } from '../utils/config';

@Component({
  selector: 'xp-desktop',
  standalone: true,
  imports: [TaskbarComponent],
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
}
