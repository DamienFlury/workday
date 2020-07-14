import { Foreground, ForegroundAction } from './foreground-types';

type State = {
  foreground: Foreground;
};

export const foregroundReducer = (
  state: State = { foreground: 'default' },
  action: ForegroundAction
): State => {
  switch (action.type) {
    case 'SET_FOREGROUND':
      return { ...state, foreground: action.payload.foreground };
    default:
      return state;
  }
};
