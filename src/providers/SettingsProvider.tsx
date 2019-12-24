import React, { useState } from 'react';

export type ThemeType = 'light' | 'dark' | 'default';
export type BackgroundType = ThemeType | 'image';
export type ForegroundType = 'default' | 'transparent'
export type TimeFormat = '24h' | 'ampm' | 'default';


export type Settings = {
  themeType: ThemeType;
  timeFormat: string;
  background: BackgroundType;
  foreground: ForegroundType;
}

const SettingsContext = React.createContext<Settings>({
  themeType: 'default',
  timeFormat: 'default',
  background: 'default',
  foreground: 'default',
});


const SettingsProvider: React.FC = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('default');
  const [timeFormat, setTimeFormat] = useState<TimeFormat>('default');
  const [background, setBackground] = useState<BackgroundType>('default');
  const [foreground, setForeground] = useState<ForegroundType>('default');

  return (
    <SettingsContext.Provider value={{
      themeType, timeFormat, background, foreground,
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
