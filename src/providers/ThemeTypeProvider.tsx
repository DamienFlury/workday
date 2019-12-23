import React, { useState } from 'react';

export type ThemeType = 'light' | 'dark' | 'default';

type ThemeTypeState = {
  themeType: ThemeType,
  setThemeType: (type: ThemeType) => void,
};

const initialState: ThemeTypeState = {
  themeType: 'default',
  setThemeType: () => {},
};

export const ThemeTypeContext = React.createContext(initialState);

const ThemeTypeProvider: React.FC = ({ children }) => {
  const [themeType, setThemeType] = useState(initialState.themeType);

  return (
    <ThemeTypeContext.Provider value={{ themeType, setThemeType }}>
      {children}
    </ThemeTypeContext.Provider>
  );
};

export default ThemeTypeProvider;
