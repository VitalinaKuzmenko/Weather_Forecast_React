import React from "react";
import "./Section3.css";
import PartDayForecast from "./PartDayForecast";

export default function Section3({ weather, celsius }) {
  return (
    <div className="Section3">
      <div className="row">
        <PartDayForecast time="Day" weather={weather} celsius={celsius} />
        <PartDayForecast time="Night" weather={weather} celsius={celsius} />
      </div>
    </div>
  );
}
