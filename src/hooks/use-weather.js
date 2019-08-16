import { useState, useEffect } from 'react';

const sanFrancisco = { lat: 37.7749, lon: -122.4194 };

const useWeather = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [permissionState, setPermissionState] = useState('prompt');


  const fetchAtPosition = ({ lat, lon }) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        lat
      }&lon=${lon}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
    )
      .then(res => res.json())
      .then((res) => {
        setWeather(res);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      setPermissionState(permissionStatus.state);
      // eslint-disable-next-line no-param-reassign
      permissionStatus.onchange = () => {
        setPermissionState(permissionStatus.state);
      };
    });
  }, []);

  useEffect(() => {
    if (permissionState === 'granted' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchAtPosition({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      }, () => fetchAtPosition(sanFrancisco));
    } else {
      fetchAtPosition(sanFrancisco);
    }
  }, [permissionState]);

  return {
    weather, isLoading, permissionState,
  };
};

export default useWeather;
