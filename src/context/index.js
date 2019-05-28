import React from "react";
import ThemeContext from "./theme-context";

const defaultTheme = {};

function ThemeProvider({ theme = defaultTheme, children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
