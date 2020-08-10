import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Foreground } from './foreground-types';

type State = {
  foreground: Foreground;
};

const initialState: State = { foreground: 'default' };

export const foregroundSlice = createSlice({
  name: 'foreground',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Foreground>) => ({
      ...state,
      foreground: action.payload,
    }),
  },
});
