import { ThunkDispatch } from "redux-thunk";

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


export const fetchQuote  = () => async (dispatch: ThunkDispatch<{}, {}, QuoteAction>) => {
  dispatch({ type: FETCH_QUOTE_PENDING });
  try {
    const response = await fetch('https://quotes.rest/qod.json');
    const data = await response.json();
    const quote = data.contents ? data.contents.quotes[0] : { quote: 'Don\'t cry because it\'s over, smile because it happened', author: 'Dr. Seuss' };
    dispatch({ type: FETCH_QUOTE_FULFILLED, quote });
  } catch (error) {
    dispatch({ type: FETCH_QUOTE_REJECTED, error });
  }
};
