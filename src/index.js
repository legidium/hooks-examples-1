import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// import Counter from "./1-state-class";
import Counter from "./1-state-hook";

import ThemeProvider from "./context";
import Button from "./context/button-no-hook-function";
// import Button from "./context/button-no-hook-class";
// import Button from "./context/button-hook";

const theme = { color: "blue" };

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Counter />
        <Button>Hello</Button>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
