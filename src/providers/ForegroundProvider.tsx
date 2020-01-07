import React, { useState, useEffect } from 'react';

export type Foreground = 'transparent' | 'default';

type ForegroundState = {
  foreground: Foreground;
  setForeground: (foreground: Foreground) => void;
}

const getInitialForeground = () => {
  const fromLocalStorage = localStorage.getItem('foreground');
  return fromLocalStorage === 'transparent' ? fromLocalStorage : 'default';
};

const initialState: ForegroundState = {
  foreground: getInitialForeground(),
  setForeground: () => {
    // empty as default
  },
};

export const ForegroundContext = React.createContext(initialState);

const ForegroundProvider: React.FC = ({ children }) => {
  const [foreground, setForeground] = useState(initialState.foreground);

  useEffect(() => {
    localStorage.setItem('foreground', foreground);
  }, [foreground]);

  return (
    <ForegroundContext.Provider value={{ foreground, setForeground }}>
      {children}
    </ForegroundContext.Provider>
  );
};

export default ForegroundProvider;
