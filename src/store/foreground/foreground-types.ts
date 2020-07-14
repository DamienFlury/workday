export type Foreground = 'transparent' | 'default';

type SetForegroundAction = {
  type: 'SET_FOREGROUND';
  payload: {
    foreground: Foreground;
  };
};

export type ForegroundAction = SetForegroundAction;
