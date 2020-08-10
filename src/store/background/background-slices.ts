import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Background } from './background-types';

type State = {
  background: Background;
};

const initialState: State = {
  background: 'default',
};

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Background>) => ({
      ...state,
      background: action.payload,
    }),
  },
});
