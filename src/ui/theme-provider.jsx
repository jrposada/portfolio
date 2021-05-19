import { createContext, useContext } from 'react';

import './theme-provider.scss';

const ThemeContext = createContext(undefined);

function useTheme() {
  const Context = useContext(ThemeContext);
  if (!Context) {
    throw new Error('No theme provider!');
  }
  return Context;
}

function ThemeProvider({ theme, children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { useTheme };
