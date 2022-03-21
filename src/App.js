import React from "react";
import './App.css';

import Navbar  from "./components/navbar/Navbar"
import Introduction from "./components/introduction/Introduction";
import HorizontalLine from "./components/horizontalLine/HorizontalLine";
import Project from "./components/projects/Project";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Introduction />
      <HorizontalLine />
      <Project />
    </div>
  );
}

export default App;
