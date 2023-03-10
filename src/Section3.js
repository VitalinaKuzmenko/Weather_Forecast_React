import React from "react";
import "./Section3.css";
import PartDayForecast from "./PartDayForecast";

export default function Section3({ weather }) {
  return (
    <div className="Section3">
      <div className="row">
        <div className="col-6">
          <PartDayForecast time="Daytime" weather={weather} />
        </div>
        <div className="col-6">
          <PartDayForecast time="Nightime" weather={weather} />
        </div>
      </div>
    </div>
  );
}
