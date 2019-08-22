import { SAVE_SETTINGS } from '../actions/settings-actions';

// prefersDarkTheme.onchange = () => {
//   setType(prefersDarkTheme.matches ? 'dark' : 'light');
// };

const initialState = {
  theme: {
    type: window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },
  timeFormat: 'default',
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return { ...state, ...action.settings };
    default:
      return state;
  }
};

export default settings;
