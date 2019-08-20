import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from '../store/actions/weather-actions';

const sanFrancisco = { lat: 37.7749, lon: -122.4194 };

const useWeather = () => {
  const [permissionState, setPermissionState] = useState('prompt');
  const dispatch = useDispatch();
  const status = useSelector(state => state.weather.status);

  useEffect(() => {
    if (!navigator || !navigator.permissions) {
      return;
    }
    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      setPermissionState(permissionStatus.state);
      // eslint-disable-next-line no-param-reassign
      permissionStatus.onchange = () => {
        setPermissionState(permissionStatus.state);
      };
    });
  }, []);

  const onClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        dispatch(fetchWeather({ lat: pos.coords.latitude, lon: pos.coords.longitude }));
      }, () => dispatch(fetchWeather(sanFrancisco)));
    } else {
      dispatch(fetchWeather(sanFrancisco));
    }
  };

  useEffect(() => {
    if (status === 'success') {
      return;
    }
    if (permissionState === 'granted' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        dispatch(fetchWeather({ lat: pos.coords.latitude, lon: pos.coords.longitude }));
      }, () => dispatch(fetchWeather(sanFrancisco)));
    } else {
      dispatch(fetchWeather(sanFrancisco));
    }
  }, [permissionState, dispatch, status]);
  const weather = useSelector(state => state.weather.data);

  return {
    weather, status, permissionState, onClick,
  };
};

export default useWeather;
