import React from "react";
import "./Section3.css";
import PartDayForecast from "./PartDayForecast";

export default function Section3() {
  return (
    <div className="Section3">
      <div className="row">
        <div className="col-6">
          <PartDayForecast time="Daytime" />
        </div>
        <div className="col-6">
          <PartDayForecast time="Nightime" />
        </div>
      </div>
    </div>
  );
}
