export const FETCH_QUOTE_PENDING = 'FETCH_QUOTE_PENDING';
export const FETCH_QUOTE_FULFILLED = 'FETCH_QUOTE_FULFILLED';
export const FETCH_QUOTE_REJECTED = 'FETCH_QUOTE_REJECTED';

export interface Quote {
  readonly quote: string;
  readonly author: string;
}

export interface QuoteAction {
  readonly type: string,
  readonly quote?: Quote,
  readonly error?: string,
}

export interface QuoteState {
  readonly data?: Quote,
  readonly status: string,
  readonly error?: string
}
