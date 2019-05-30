import React from "react";
import ThemeContext from "./theme-context";

function Button({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ color }) => <button style={{ color }}>{children}</button>}
    </ThemeContext.Consumer>
  );
}

export default Button;
