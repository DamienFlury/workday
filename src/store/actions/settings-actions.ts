import { ThunkDispatch } from "redux-thunk";

export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export interface SettingsAction {
  type: string,
  settings: SettingsState,
}

export interface SettingsState {
  theme: {
    type: string,
  },
  timeFormat: string,
}

export const saveSettings = (settings: SettingsState) => (dispatch: ThunkDispatch<{}, {}, SettingsAction>) => {
  dispatch({ type: SAVE_SETTINGS, settings });
  localStorage.setItem('settings', JSON.stringify(settings));
};
