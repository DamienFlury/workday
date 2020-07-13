import { TimeFormat, TimeFormatAction } from './time-format-types';

type State = {
  format: TimeFormat;
};

export const timeFormatReducer = (
  state: State = { format: 'default' },
  action: TimeFormatAction
): State => {
  switch (action.type) {
    case 'SET_TIME_FORMAT':
      return { ...state, format: action.payload.format };
    default:
      return state;
  }
};
