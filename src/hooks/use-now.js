import { useState, useEffect } from 'react';
import moment from 'moment';

const useNow = (updateTime) => {
  const [now, setNow] = useState(moment());
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNow(moment());
    }, updateTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [now]);
  return now;
};

export default useNow;
