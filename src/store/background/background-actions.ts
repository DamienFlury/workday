import { Background, BackgroundAction } from './background-types';

export const setBackground = (background: Background): BackgroundAction => ({
  type: 'SET_BACKGROUND',
  payload: {
    background,
  },
});
