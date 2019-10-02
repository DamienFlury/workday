import { ThunkDispatch } from 'redux-thunk';
import { SettingsState, SettingsAction, SAVE_SETTINGS } from './types';


export const saveSettings = (settings: SettingsState) => (dispatch: ThunkDispatch<{}, {}, SettingsAction>) => {
  dispatch({ type: SAVE_SETTINGS, settings });
  localStorage.setItem('settings', JSON.stringify(settings));
};
