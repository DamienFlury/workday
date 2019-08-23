import { SAVE_SETTINGS } from '../actions/settings-actions';

// prefersDarkTheme.onchange = () => {
//   setType(prefersDarkTheme.matches ? 'dark' : 'light');
// };

const stateFromLocalStorage = JSON.parse(localStorage.getItem('settings'));

const initialState = {
  theme: {
    type: 'default',
  },
  timeFormat: 'default',
};

const settings = (state = stateFromLocalStorage || initialState, action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return { ...state, ...action.settings };
    default:
      return state;
  }
};

export default settings;
