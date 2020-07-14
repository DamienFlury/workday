export type ThemeType = 'light' | 'dark' | 'default';

type SetThemeTypeAction = {
  type: 'SET_THEME_TYPE';
  payload: { type: ThemeType };
};

export type ThemeAction = SetThemeTypeAction;
