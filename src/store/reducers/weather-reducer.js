import {
  FETCH_WEATHER_PENDING, FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED, CHANGE_PERMISSION,
} from '../actions/weather-actions';

const weather = (state = { status: 'initial', data: {}, permission: 'prompt' }, action) => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return { ...state, status: 'pending' };
    case FETCH_WEATHER_FULFILLED:
      return { ...state, status: 'success', data: action.weather };
    case FETCH_WEATHER_REJECTED:
      return { ...state, status: 'error', error: action.error };
    case CHANGE_PERMISSION:
      return { ...state, permission: action.permission };
    default:
      return state;
  }
};

export default weather;
