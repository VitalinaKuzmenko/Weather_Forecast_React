import React from "react";
import "./MainSections.css";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function MainSections({ weather, celsius, setCelsius }) {
  return (
    <div className="MainSections">
      <div className="row">
        <div className="col-lg-5">
          <Section2
            weather={weather}
            celsius={celsius}
            setCelsius={setCelsius}
          />
        </div>
        <div className="col-1 d-none d-lg-block vertical_line"></div>
        <div className="col d-lg-none horizontal_line"></div>
        <div className="col-lg-5">
          <Section3 weather={weather} celsius={celsius} />
        </div>
      </div>
      <div className="row">
        <div className="col horizontal_line"></div>
      </div>
    </div>
  );
}
