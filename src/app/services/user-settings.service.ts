import { Injectable } from '@angular/core';
interface DefaultSettings {
  wallpaper: number
  theme: number
}

@Injectable({ providedIn: 'root' })
export class UserSettingsService {
  private readonly DEFAULT_SETTINGS: DefaultSettings = {
    wallpaper: 0,
    theme: 1,
  };

  getSetting(key: keyof DefaultSettings): any {
    if(!Object.keys(this.DEFAULT_SETTINGS).includes(key)) return;
    
    const savedSetting = localStorage.getItem(key);
    return savedSetting ? JSON.parse(savedSetting) : this.DEFAULT_SETTINGS[key];
  }

  saveSetting(key: keyof DefaultSettings, config: any): void {
    localStorage.setItem(key, JSON.stringify(config));
  }
}