export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export type ThemeType = 'light' | 'dark' | 'default';
export type BackgroundType = ThemeType | 'image';
export type ForegroundType = 'default' | 'transparent'


export interface SettingsAction {
  type: string,
  settings: SettingsState,
}

export interface SettingsState {
  theme: {
    type: ThemeType,
  },
  timeFormat: string,
  background: BackgroundType,
  foreground: ForegroundType
}
