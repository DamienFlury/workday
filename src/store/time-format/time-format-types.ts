export type TimeFormat = 'ampm' | '24h' | 'default';

export type TimeFormatAction = {
  type: 'SET_TIME_FORMAT';
  payload: {
    format: TimeFormat;
  };
};
