import React, { useState, useEffect } from 'react';

export type TimeFormat = 'ampm' | '24h' | 'default';

type TimeFormatState = {
  timeFormat: TimeFormat;
  setTimeFormat: (format: TimeFormat) => void;
};

const getInitialTimeFormat = () => {
  const fromLocalStorage = localStorage.getItem('time-format');
  return fromLocalStorage === '24h' || fromLocalStorage === 'ampm'
    ? fromLocalStorage
    : 'default';
};

const initialState: TimeFormatState = {
  timeFormat: getInitialTimeFormat(),
  setTimeFormat: () => {
    // do nothing
  },
};

const TimeFormatContext = React.createContext<TimeFormatState>(initialState);

const TimeFormatProvider: React.FC = ({ children }) => {
  const [timeFormat, setTimeFormat] = useState(initialState.timeFormat);

  useEffect(() => {
    localStorage.setItem('time-format', timeFormat);
  }, [timeFormat]);

  return (
    <TimeFormatContext.Provider value={{ timeFormat, setTimeFormat }}>
      {children}
    </TimeFormatContext.Provider>
  );
};

export default TimeFormatProvider;
