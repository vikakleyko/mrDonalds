import React from "react";
import { NavBar } from "./Components/NavBar";
import { Menu } from "./Components/Menu";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Menu />
    </div>
  );
}

export default App;
