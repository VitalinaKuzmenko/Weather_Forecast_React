import React from "react";
import "./PartDayForecast.css";

export default function PartDayForecast(props) {
  return (
    <div className="PartDayForecast">
      <div className="part">
        <p>{props.time}</p>
        <p>
          <span id="day_temperature">20</span>
          <span className="unit">°C</span>
        </p>

        <img
          className="medium_icon"
          id="day_icon"
          src={require("./media/01d.png")}
          alt="Sunny"
        />
        <p id="day-description">Warm</p>
      </div>
    </div>
  );
}
