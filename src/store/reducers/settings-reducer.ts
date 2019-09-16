import { SAVE_SETTINGS, SettingsState, SettingsAction } from '../actions/settings-actions';

// prefersDarkTheme.onchange = () => {
//   setType(prefersDarkTheme.matches ? 'dark' : 'light');
// };



const stateFromLocalStorage: SettingsState = JSON.parse(localStorage.getItem('settings') as string);

const initialState: SettingsState = {
  theme: {
    type: 'default',
  },
  timeFormat: 'default',
  background: 'default',
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
