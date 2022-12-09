import React from 'react';

const DARK_LOCAL_STORAGE_KEY = 'dark';

export const ThemeContext = React.createContext({
  dark: true,
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(true); // dark by default

  const html = document.querySelector('html');

  const toggleTheme = React.useCallback(() => {
    setDark((prevDark) => {
      localStorage.setItem(
        DARK_LOCAL_STORAGE_KEY,
        JSON.stringify(!prevDark),
      );

      if(!prevDark){
        html.setAttribute('dark', true);
      } else html.removeAttribute('dark');

      return !prevDark;
    });
  }, [html]);

  React.useEffect(() => {
    const localValue = JSON.parse(
      localStorage.getItem(DARK_LOCAL_STORAGE_KEY),
    );
    html.setAttribute('dark', true);
    if(localValue){
      setDark(localValue)
    }
  }, [html]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
