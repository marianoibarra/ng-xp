import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UserSettingsService } from '../../services/user-settings.service';
import { themes } from '../../utils/config';

@Component({
  selector: 'xp-taskbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent implements OnInit, OnDestroy {

  themePath?: string
  clock = new Date()
  clockSubs$?: Subscription
  startIsOpen: boolean = false

  constructor(private userSettings: UserSettingsService) {}

  @HostBinding('style.backgroundImage') get wallpaper() {
    return `url("/assets/taskbar/${this.themePath}/bg.png")`
  }

  ngOnInit(): void {
    this.setClock()
    this.setTheme()
  }

  ngOnDestroy(): void {
    this.clockSubs$?.unsubscribe()
  }

  private setTheme(): void {
    const themeIndex = this.userSettings.getSetting('theme')
    this.themePath = themes[themeIndex].path
  }

  private setClock(): void {
    this.clockSubs$ = interval(1000).subscribe(() => {
      const newDate = new Date()
      if(this.clock.getMinutes() !== newDate.getMinutes()) {
        this.clock = newDate
      }
    })
  }  


  get startStyle(): any {
    return {backgroundImage: `url("/assets/taskbar/${this.themePath}/start.png")`}
  }

  get trayStyle(): any {
    return {backgroundImage: `url("/assets/taskbar/${this.themePath}/tray.png")`}
  }
}
