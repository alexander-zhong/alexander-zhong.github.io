import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";
import About from "./sections/About";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <About />
    </>
  );
}

export default App;
