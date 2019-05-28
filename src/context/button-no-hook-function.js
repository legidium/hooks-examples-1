import React from "react";
import ThemeContext from "./theme-context";

function Button({ theme: { color }, children }) {
  return <button style={{ color }}>{children}</button>;
}

// HOC
function withTheme(Component) {
  return props => (
    <ThemeContext.Consumer>
      {theme => <Component {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}
export default withTheme(Button);
