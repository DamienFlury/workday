import React, { useState } from 'react';

export type Foreground = 'transparent' | 'default';

type ForegroundState = {
  foreground: Foreground,
  setForeground: (foreground: Foreground) => void,
}

const initialState: ForegroundState = {
  foreground: 'default',
  setForeground: () => {},
};

export const ForegroundContext = React.createContext(initialState);

const ForegroundProvider: React.FC = ({ children }) => {
  const [foreground, setForeground] = useState(initialState.foreground);

  return (
    <ForegroundContext.Provider value={{ foreground, setForeground }}>
      {children}
    </ForegroundContext.Provider>
  );
};

export default ForegroundProvider;
