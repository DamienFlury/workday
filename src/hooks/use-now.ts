import { useState, useEffect } from 'react';

const useNow = (updateTime: number) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNow(new Date());
    }, updateTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [now, updateTime]);
  return now;
};

export default useNow;
