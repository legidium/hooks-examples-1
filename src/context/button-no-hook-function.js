import React from "react";
import ThemeContext from "./theme-context";

function Button({ color, children }) {
  return <button style={{ color }}>{children}</button>;
}

function ThemedButton({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => <Button color={theme.primaryColor}>{children}</Button>}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;
