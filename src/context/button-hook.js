import React, { useContext } from "react";
import ThemeContext from "./theme-context";

function Button({ children }) {
  const { color } = useContext(ThemeContext);
  return <button style={{ color }}>{children}</button>;
}

export default Button;
