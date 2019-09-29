import React, { createContext, useReducer } from 'react';
import { QuoteState, FETCH_QUOTE_PENDING, FETCH_QUOTE_REJECTED, FETCH_QUOTE_FULFILLED } from '../store/actions/quote-actions';

const initialState: QuoteState = { status: 'initial', data: { quote: 'lol', author: 'xD' } };
export const QuoteContext: React.Context<[QuoteState, () => Promise<void>]> = createContext([initialState, async() => {}]);

const QuoteProvider: React.FC = ({ children }) => {
    const [quote, dispatch] = useReducer((state, action) => {
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
    }, initialState);

    const fetchQuote  = async() => {
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
      

    return (
        <QuoteContext.Provider value={[quote, fetchQuote]}>
            {children}
        </QuoteContext.Provider>
    )
};

export default QuoteProvider;