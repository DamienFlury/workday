import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from './theme-types';

type State = {
  type: ThemeType;
};

const initialState: State = {
  type: 'default',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ThemeType>) => ({
      ...state,
      type: action.payload,
    }),
  },
});
