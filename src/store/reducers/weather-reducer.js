import { FETCH_WEATHER_PENDING, FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED } from '../actions/weather-actions';

const weather = (state = { status: 'none', data: {} }, action) => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return { ...state, status: 'pending' };
    case FETCH_WEATHER_FULFILLED:
      return { ...state, status: 'success', data: action.weather };
    case FETCH_WEATHER_REJECTED:
      return { ...state, status: 'error', error: action.error };
    default:
      return state;
  }
};

export default weather;
