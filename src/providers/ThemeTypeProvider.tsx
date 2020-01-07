import React, { useState, useEffect } from 'react';

export type ThemeType = 'light' | 'dark' | 'default';

type ThemeTypeState = {
  themeType: ThemeType;
  setThemeType: (type: ThemeType) => void;
};

const getInitialTheme = () => {
  const fromLocalStorage = localStorage.getItem('theme-type');
  return fromLocalStorage === 'light' || fromLocalStorage === 'dark'
    ? fromLocalStorage
    : 'default';
};

const initialState: ThemeTypeState = {
  themeType: getInitialTheme(),
  setThemeType: () => {
    // empty by default
  },
};

export const ThemeTypeContext = React.createContext(initialState);

const ThemeTypeProvider: React.FC = ({ children }) => {
  const [themeType, setThemeType] = useState(initialState.themeType);

  useEffect(() => {
    localStorage.setItem('theme-type', themeType);
  }, [themeType]);

  return (
    <ThemeTypeContext.Provider value={{ themeType, setThemeType }}>
      {children}
    </ThemeTypeContext.Provider>
  );
};

export default ThemeTypeProvider;
