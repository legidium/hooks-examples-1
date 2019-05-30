import React from "react";
import ThemeContext from "./theme-context";

class Button extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { children } = this.props;
    const { color } = this.context;
    return <button style={{ color }}>{children}</button>;
  }
}

export default Button;
