import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeFormat } from './time-format-types';

type State = {
  format: TimeFormat;
};

const initialState: State = { format: 'default' };

const timeFormatSlice = createSlice({
  name: 'time-format',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<TimeFormat>) => ({
      ...state,
      format: action.payload,
    }),
  },
});

export default timeFormatSlice;
