import { useState, useEffect } from 'react';

const zurich = { lat: 47.3769, lon: 8.5417 };

const useWeather = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const fetchAtPosition = ({ lat, lon }) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        lat
      }&lon=${lon}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
    )
      .then(res => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchAtPosition({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      }, () => fetchAtPosition(zurich));
    } else {
      fetchAtPosition(zurich);
    }
  }, []);

  return [data, isLoading];
};

export default useWeather;
