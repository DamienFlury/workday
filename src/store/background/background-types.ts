export type Background = 'dark' | 'light' | 'image' | 'default';

type SetBackgroundAction = {
  type: 'SET_BACKGROUND';
  payload: {
    background: Background;
  };
};

export type BackgroundAction = SetBackgroundAction;
