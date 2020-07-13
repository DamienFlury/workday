import { Quote, QuoteAction } from './quote-types';

type QuoteState = {
  quote: Quote;
  status: 'idle' | 'loading' | 'success';
};

const initialState: QuoteState = {
  quote: {
    quote: "Don't cry because it's over, smile because it happened",
    author: 'Dr. Seuss',
  },
  status: 'idle',
};

export const quoteReducer = (
  state: QuoteState = initialState,
  action: QuoteAction
): QuoteState => {
  switch (action.type) {
    case 'FETCH_QUOTE':
      return { ...state, status: 'loading' };
    case 'FETCH_QUOTE_FULFILLED':
      return { ...state, status: 'success', quote: action.payload.quote };
    default:
      return state;
  }
};
