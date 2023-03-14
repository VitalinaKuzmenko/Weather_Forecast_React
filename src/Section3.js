import React from "react";
import "./Section3.css";
import PartDayForecast from "./PartDayForecast";

export default function Section3({ weather, celsius }) {
  return (
    <div className="Section3">
      <div className="row">
        <div className="col-6 part">
          <PartDayForecast time="Day" weather={weather} celsius={celsius} />
        </div>
        <div className="col-6 part">
          <PartDayForecast time="Night" weather={weather} celsius={celsius} />
        </div>
      </div>
    </div>
  );
}
