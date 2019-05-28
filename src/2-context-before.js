import React from "react";

export const ThemeContext = React.createContext({});

function ThemeProvider({ theme = {}, children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function Button({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button style={{ color: theme.primaryColor }}>{children}</button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeProvider;
