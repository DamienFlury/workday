import React, { useState } from 'react';

export type Background = 'dark' | 'light' | 'image' | 'default';

type BackgroundState = {
  background: Background,
  setBackground: (background: Background) => void,
}

const initialState: BackgroundState = {
  background: 'default',
  setBackground: () => {},
};

export const BackgroundContext = React.createContext(initialState);

const BackgroundProvider: React.FC = ({ children }) => {
  const [background, setBackground] = useState(initialState.background);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundProvider;
