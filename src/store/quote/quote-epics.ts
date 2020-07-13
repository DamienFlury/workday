import { Epic, ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { QuoteAction } from './quote-types';
import { fetchQuoteFulfilled } from './quote-actions';

export const quoteEpic: Epic<QuoteAction> = (action$) =>
  action$.pipe(
    ofType('FETCH_QUOTE'),
    mergeMap((action) =>
      ajax.getJSON('https://quotes.rest/qod.json').pipe(
        map((data: any) => fetchQuoteFulfilled(data.contents.quotes[0])),
        catchError((error) =>
          of<QuoteAction>({
            type: 'FETCH_QUOTE_REJECTED',
          })
        )
      )
    )
  );
