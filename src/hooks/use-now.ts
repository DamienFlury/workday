import { useState, useEffect } from 'react';
import moment from 'moment';

const useNow = (updateTime: number) => {
  const [now, setNow] = useState(moment());
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNow(moment());
    }, updateTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [now, updateTime]);
  return now;
};

export default useNow;
