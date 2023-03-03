import React from "react";
import "./MainWindow.css";
import Section1 from "./Section1";
import MainSections from "./MainSections";
import Section4 from "./Section4";

export default function MainWindow() {
  return (
    <div className="MainWindow">
      <Section1 />
      <MainSections />
      <Section4 />
    </div>
  );
}
