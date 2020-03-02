import React, { useState, useEffect } from 'react';

export type Background = 'dark' | 'light' | 'image' | 'default';

type BackgroundState = {
  background: Background;
  setBackground: (background: Background) => void;
};

const getInitialBackground = () => {
  const fromLocalStorage = localStorage.getItem('background');

  return fromLocalStorage === 'dark' ||
    fromLocalStorage === 'light' ||
    fromLocalStorage === 'image'
    ? fromLocalStorage
    : 'default';
};

const initialState: BackgroundState = {
  background: getInitialBackground(),
  setBackground: () => {
    // empty as default
  },
};

export const BackgroundContext = React.createContext(initialState);

const BackgroundProvider: React.FC = ({ children }) => {
  const [background, setBackground] = useState(initialState.background);

  useEffect(() => {
    localStorage.setItem('background', background);
  }, [background]);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundProvider;
