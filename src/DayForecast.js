import React, { useState, useEffect } from "react";
import "./DayForecast.css";

export default function DayForecast({ dayForecast, celsius }) {
  const [unit, setUnit] = useState("°C");

  //changing the main temperature
  useEffect(() => {
    if (celsius === false) {
      setUnit("°F");
    } else {
      setUnit("°C");
    }
  }, [celsius]);

  return (
    <div className="DayForecast">
      <div className="day">
        <p>{dayForecast.day}</p>
        <img
          className="small_icon"
          src={require(`./media/${dayForecast.picture}.png`)}
          alt={dayForecast.description}
        />
        <div className="row d-flex flex-column">
          <div className="col">
            <span id="max-temperature">{dayForecast.maxTemp}</span>
            <span className="unit">{unit}</span>
          </div>
          <div className="col">
            <span id="min-temperature">{dayForecast.minTemp}</span>
            <span className="unit">{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
