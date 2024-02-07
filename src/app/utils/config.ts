export const wallpapers: Wallpaper[] = [
  {
    name: 'Bliss',
    filename: 'Bliss.jpg'
  },
  {
    name: 'Ascent',
    filename: 'Ascent.jpg'
  },
  {
    name: 'Azul',
    filename: 'Azul.jpg'
  },
  {
    name: 'Follow',
    filename: 'Follow.jpg'
  },
  {
    name: 'Friend',
    filename: 'Friend.jpg'
  },
  {
    name: 'Radiance',
    filename: 'Radiance.jpg'
  },
  {
    name: 'Red moon desert',
    filename: 'RedMoonDesert.jpg'
  },
  {
    name: 'Tulips',
    filename: 'Tulips.jpg'
  },
  {
    name: 'Vortec space',
    filename: 'Vortec.jpg'
  },
  {
    name: 'Wind',
    filename: 'Wind.jpg'
  },
  {
    name: 'Azul',
    filename: 'Azul.jpg'
  },
  {
    name: 'Follow',
    filename: 'Follow.jpg'
  },
]

export interface Wallpaper {
  name: string,
  filename: string
}

export const themes: Theme[] = [
  {
    key: 'blue',
    name: 'Default (blue)'
  },
  {
    key: 'silver',
    name: 'Silver'
  },
  {
    key: 'olive',
    name: 'Olive Green'
  }
]

export interface Theme {
  key: string,
  name: string
}