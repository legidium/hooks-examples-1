import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Counter from "./1-state-class";
// import Counter from "./1-state-hook";
import ThemeContext from "./2-context-theme";
import Button from "./2-context-hook";

const theme = { primaryColor: "red" };

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <ThemeContext.Consumer>
          {theme => <Counter color={theme.primaryColor} />}
        </ThemeContext.Consumer>

        <Button>Hello</Button>
      </div>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
