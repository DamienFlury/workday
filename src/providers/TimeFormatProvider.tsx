import React, { useState } from 'react';

export type TimeFormat = 'ampm' | '24h' | 'default';

type TimeFormatState = {
  timeFormat: TimeFormat,
  setTimeFormat: (format: TimeFormat) => void,
}

const initialState: TimeFormatState = {
  timeFormat: 'default',
  setTimeFormat: () => {},
};

export const TimeFormatContext = React.createContext<TimeFormatState>(initialState);

const TimeFormatProvider: React.FC = ({ children }) => {
  const [timeFormat, setTimeFormat] = useState(initialState.timeFormat);

  return (
    <TimeFormatContext.Provider value={{ timeFormat, setTimeFormat }}>
      {children}
    </TimeFormatContext.Provider>
  );
};

export default TimeFormatProvider;
