import React from 'react';
import { ThemeContext } from './themeContext';

export const useThemeContext = () => {
  return React.useContext(ThemeContext);
};
