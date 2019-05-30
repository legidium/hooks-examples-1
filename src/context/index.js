import React from "react";
import ThemeContext from "./theme-context";
import UserContext from "./user-context";

// import Button from "./button-function";
// import Button from "./button-class";
import Button from "./button-hook";

const theme = { color: "blue" };

const user = "mike";

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={theme}>
          <Button>Hello</Button>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
