import { ThemeAction, ThemeType } from './theme-types';

export const setThemeType = (type: ThemeType): ThemeAction => {
  return { type: 'SET_THEME_TYPE', payload: { type } };
};
