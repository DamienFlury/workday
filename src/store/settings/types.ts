export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export type ThemeType = 'light' | 'dark' | 'default';
export type BackgroundType = ThemeType | 'image';
export type ForegroundType = 'default' | 'transparent'


export interface SettingsAction {
  readonly type: string,
  readonly settings: SettingsState,
}

export interface SettingsState {
  readonly theme: {
    readonly type: ThemeType,
  },
  readonly timeFormat: string,
  readonly background: BackgroundType,
  readonly foreground: ForegroundType
}
