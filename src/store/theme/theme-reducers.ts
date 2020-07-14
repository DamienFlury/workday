import { ThemeType, ThemeAction } from './theme-types';

type State = {
  type: ThemeType;
};

export const themeReducer = (
  state: State = { type: 'default' },
  action: ThemeAction
) => {
  switch (action.type) {
    case 'SET_THEME_TYPE':
      return { ...state, type: action.payload.type };
    default:
      return state;
  }
};
