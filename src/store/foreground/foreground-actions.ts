import { ForegroundAction, Foreground } from './foreground-types';

export const setForeground = (foreground: Foreground): ForegroundAction => ({
  type: 'SET_FOREGROUND',
  payload: {
    foreground,
  },
});
