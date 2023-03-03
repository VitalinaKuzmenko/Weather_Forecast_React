import React from "react";
import "./DayForecast.css";

export default function DayForecast(props) {
  return (
    <div className="DayForecast">
      <div className="day">
        <p>{props.day}</p>
        <img
          className="small_icon"
          src={require("./media/04d.png")}
          alt="Sunny"
        />
        <div className="row">
          <div className="col">
            <span id="max-temperature">25</span>
            <span className="unit">°C</span>
          </div>
          <div className="col">
            <span id="min-temperature">15</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
