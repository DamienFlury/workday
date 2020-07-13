import { TimeFormat, TimeFormatAction } from './time-format-types';

export const setTimeFormat = (format: TimeFormat): TimeFormatAction => {
  return { type: 'SET_TIME_FORMAT', payload: { format } };
};
