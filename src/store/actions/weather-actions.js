export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED';
export const FETCH_WEATHER_REJECTED = 'FETCH_WEATHER_REJECTED';

const fetchWeather = ({ lat, lon }) => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_PENDING });
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        lat
      }&lon=${lon}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
    );
    const weather = await response.json();
    dispatch({ type: FETCH_WEATHER_FULFILLED, weather });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_REJECTED, error });
  }
};

export default fetchWeather;
