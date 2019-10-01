export const FETCH_QUOTE_PENDING = 'FETCH_QUOTE_PENDING';
export const FETCH_QUOTE_FULFILLED = 'FETCH_QUOTE_FULFILLED';
export const FETCH_QUOTE_REJECTED = 'FETCH_QUOTE_REJECTED';

export interface Quote {
  quote: string;
  author: string;
}

export interface QuoteAction {
  type: string,
  quote?: Quote,
  error?: string,
}

export interface QuoteState {
  data?: Quote,
  status: string,
  error?: string
}
