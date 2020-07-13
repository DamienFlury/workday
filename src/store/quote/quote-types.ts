export type Quote = {
  quote: string;
  author: string;
};

type FetchQuoteAction = {
  type: 'FETCH_QUOTE';
};
type FetchQuoteFulfilledAction = {
  type: 'FETCH_QUOTE_FULFILLED';
  payload: {
    quote: Quote;
  };
};

type FetchQuoteRejectedAction = {
  type: 'FETCH_QUOTE_REJECTED';
  error: any;
};

export type QuoteAction =
  | FetchQuoteAction
  | FetchQuoteFulfilledAction
  | FetchQuoteRejectedAction;
