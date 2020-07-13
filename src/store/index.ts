import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { timeFormatReducer } from './time-format/time-format-reducers';
import { timeFormatEpic } from './time-format/time-format-epics';
import { quoteReducer } from './quote/quote-reducers';
import { quoteEpic } from './quote/quote-epics';

const rootReducer = combineReducers({
  timeFormat: timeFormatReducer,
  quote: quoteReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

const getInitialTimeFormat = () => {
  const fromLocalStorage = localStorage.getItem('time-format');
  return fromLocalStorage === '24h' || fromLocalStorage === 'ampm'
    ? fromLocalStorage
    : 'default';
};

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(timeFormatEpic, quoteEpic);

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {
      timeFormat: {
        format: getInitialTimeFormat(),
      },
    },
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic as any);

  return store;
};

export default configureStore;
