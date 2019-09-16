import { ThunkDispatch } from "redux-thunk";

export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export type ThemeType = 'light' | 'dark' | 'default';
export type BackgroundType = 'light' | 'dark' | 'image' | 'default';


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
};

export const saveSettings = (settings: SettingsState) => (dispatch: ThunkDispatch<{}, {}, SettingsAction>) => {
  dispatch({ type: SAVE_SETTINGS, settings });
  localStorage.setItem('settings', JSON.stringify(settings));
};
