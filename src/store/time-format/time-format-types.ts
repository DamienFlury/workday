export type TimeFormat = 'ampm' | '24h' | 'default';

export type SetTimeFormatAction = {
  type: 'SET_TIME_FORMAT';
  payload: {
    format: TimeFormat;
  };
};

export type TimeFormatAction = SetTimeFormatAction;
