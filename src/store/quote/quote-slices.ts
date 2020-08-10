import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Quote } from './quote-types';

type Status = 'idle' | 'loading' | 'success' | 'error';
type State = {
  quote: Quote;
  status: Status;
};

const initialState: State = {
  quote: {
    quote: "Don't cry because it's over, smile because it happened",
    author: 'Dr. Seuss',
  },
  status: 'idle',
};

export const fetchQuote = createAsyncThunk('quote/fetch', async () => {
  const response = await fetch('https://quotes.rest/qod.json');
  const data = await response.json();
  return data.contents.quotes[0];
});

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQuote.fulfilled.type]: (state, action) => ({
      ...state,
      status: 'success' as Status,
      quote: action.payload as Quote,
    }),
    [fetchQuote.pending.type]: (state) => ({
      ...state,
      status: 'loading' as Status,
    }),
    [fetchQuote.rejected.type]: (state) => ({
      ...state,
      status: 'error' as Status,
    }),
  },
});
