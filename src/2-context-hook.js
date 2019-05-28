import React, { useContext } from "react";
import ThemeContext from "./2-context-theme";

function Button({ children }) {
  const { primaryColor: color } = useContext(ThemeContext);

  return <button style={{ color }}>{children}</button>;
}

export default Button;
