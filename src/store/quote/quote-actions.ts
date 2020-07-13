import { QuoteAction, Quote } from './quote-types';

export const fetchQuote = (): QuoteAction => {
  return { type: 'FETCH_QUOTE' };
};

export const fetchQuoteFulfilled = (quote: Quote): QuoteAction => {
  return { type: 'FETCH_QUOTE_FULFILLED', payload: { quote } };
};
