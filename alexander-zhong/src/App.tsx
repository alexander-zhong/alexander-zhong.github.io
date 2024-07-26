import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";
import About from "./sections/About";
import Menu from "./components/Menu";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <>
      <Menu />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
