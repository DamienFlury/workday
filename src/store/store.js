import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import settings from './reducers/settings-reducer';
import weather from './reducers/weather-reducer';
import quote from './reducers/quote-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  settings,
  weather,
  quote,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
