import React from "react";
import "./DayForecast.css";

export default function DayForecast({ dayForecast }) {
  return (
    <div className="DayForecast">
      <div className="day">
        <p>{dayForecast.day}</p>
        <img
          className="small_icon"
          src={require("./media/04d.png")}
          alt="Sunny"
        />
        <div className="row">
          <div className="col">
            <span id="max-temperature">{dayForecast.maxTemp}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col">
            <span id="min-temperature">{dayForecast.minTemp}</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
