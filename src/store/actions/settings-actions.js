export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export const saveSettings = settings => (dispatch) => {
  dispatch({ type: SAVE_SETTINGS, settings });
  localStorage.setItem('settings', JSON.stringify(settings));
};
