import { FETCH_QUOTE_PENDING, FETCH_QUOTE_FULFILLED, FETCH_QUOTE_REJECTED } from '../actions/quote-actions';

const quote = (state = { status: 'initial', data: {} }, action) => {
  switch (action.type) {
    case FETCH_QUOTE_PENDING:
      return { ...state, status: 'loading' };
    case FETCH_QUOTE_FULFILLED:
      return { ...state, status: 'success', data: action.quote };
    case FETCH_QUOTE_REJECTED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};

export default quote;
