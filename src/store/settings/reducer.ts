import { SAVE_SETTINGS, SettingsState, SettingsAction } from './types';


const stateFromLocalStorage: SettingsState = JSON.parse(localStorage.getItem('settings') as string);

const initialState: SettingsState = {
  theme: {
    type: 'default',
  },
  timeFormat: 'default',
  background: 'default',
  foreground: 'default',
};


const settings = (state = stateFromLocalStorage || initialState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return { ...state, ...action.settings };
    default:
      return state;
  }
};

export default settings;
