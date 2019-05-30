import React from "react";
import useTheme from "./use-theme";

function Button({ children }) {
  const { color } = useTheme();

  return <button style={{ color }}>{children}</button>;
}

export default Button;
