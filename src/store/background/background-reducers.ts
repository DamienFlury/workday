import { Background, BackgroundAction } from './background-types';

type State = {
  background: Background;
};

export const backgroundReducer = (
  state: State = { background: 'default' },
  action: BackgroundAction
): State => {
  switch (action.type) {
    case 'SET_BACKGROUND':
      return { ...state, background: action.payload.background };
    default:
      return state;
  }
};
