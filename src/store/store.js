import { createStore, combineReducers } from 'redux';
import settings from './reducers/settings-reducer';

const rootReducer = combineReducers({
  settings,
});

const store = createStore(rootReducer);

export default store;
