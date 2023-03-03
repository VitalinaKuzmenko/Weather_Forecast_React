import React from "react";
import "./MainSections.css";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function MainSections() {
  return (
    <div className="MainSections">
      <div className="row">
        <div className="col-5">
          {" "}
          <Section2 />
        </div>
        <div className="col-1 d-none d-lg-block vertical_line"></div>
        <div className="col d-lg-none horizontal_line"></div>
        <div className="col-5">
          <Section3 />
        </div>
        <div className="col horizontal_line"></div>
      </div>
      <div className="row"></div>
    </div>
  );
}
