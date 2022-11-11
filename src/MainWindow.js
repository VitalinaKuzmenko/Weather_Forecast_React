import React from "react";
import "./MainWindow.css";
import Section1 from "./Section1";
import MainSections from "./MainSections";
import Section4 from "./Section4";
import Container from "react-bootstrap/Container";

export default function MainWindow() {
  return (
    <div className="MainWindow">
      <Container>
        <Section1 />
        <MainSections />
        <Section4 />
      </Container>
    </div>
  );
}
