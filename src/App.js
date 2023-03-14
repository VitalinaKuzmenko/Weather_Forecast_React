import "./App.css";
import MainWindow from "./MainWindow";
import SourceCode from "./SourceCode";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.body.classList.add("background");
  }, []);

  return (
    <div className="App">
      <div className="container">
        <MainWindow />
        <SourceCode />
      </div>
    </div>
  );
}
