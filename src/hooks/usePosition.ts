import { useState } from 'react';

type Pos = {
  longitude: number;
  latitude: number;
}

const usePosition = () => {
  const [position, setPosition] = useState<Pos>({
    longitude: 0,
    latitude: 0,
  });
  const [permission, setPermission] = useState('prompt');

  navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
    setPermission(permissionStatus.state);
    // eslint-disable-next-line no-param-reassign
    permissionStatus.onchange = (status) => {
      setPermission((status as any).state);
    };
  });

  let watchId = 0;

  const startWatching = () => {
    watchId = navigator.geolocation.watchPosition((pos) => {
      console.log('chrome is broken');
      setPosition(pos.coords);
    });
  };

  const stopWatching = () => {
    navigator.geolocation.clearWatch(watchId);
  };

  return {
    position, startWatching, stopWatching, permission,
  };
};

export default usePosition;
