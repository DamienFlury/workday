import { Epic, ofType } from 'redux-observable';
import { mergeMap, map, catchError, retry } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { QuoteAction, Quote } from './quote-types';
import { fetchQuoteFulfilled } from './quote-actions';

type Response = {
  contents: {
    quotes: Quote[];
  };
};

export const quoteEpic: Epic<QuoteAction> = (action$) =>
  action$.pipe(
    ofType('FETCH_QUOTE'),
    mergeMap(() =>
      ajax.getJSON<Response>('https://quotes.rest/qod.json').pipe(
        map((data) => fetchQuoteFulfilled(data.contents.quotes[0])),
        retry(2),
        catchError((error) =>
          of<QuoteAction>({
            type: 'FETCH_QUOTE_REJECTED',
            error,
          })
        )
      )
    )
  );
