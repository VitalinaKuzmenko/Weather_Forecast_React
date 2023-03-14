import React, { useEffect, useState } from "react";
import "./Section2.css";

export default function Section2({ weather, celsius, setCelsius }) {
  const [temperature, setTemperature] = useState(weather.temperature);

  //changing our checkUnit celsius to true or false if it was clicked
  const changeUnit = () => {
    if (celsius === true) {
      setCelsius(false);
    } else {
      setCelsius(true);
    }
  };

  //changing the main temperature
  useEffect(() => {
    if (celsius === false) {
      setTemperature(Math.round(temperature * 1.8 + 32));
    } else {
      setTemperature(weather.temperature);
    }
  }, [weather, celsius]);

  return (
    <div className="Section2">
      <div className="row">
        <div className="col-lg-7 ">
          <p className="temperature_text">
            <span id="temperature">{temperature}</span>
            <a
              href="#0"
              className={
                celsius === true ? "temp-unit active" : "temp-unit non-active"
              }
              id="celsius-link"
              onClick={changeUnit}
            >
              °C
            </a>
            <span className="temp-unit"> | </span>
            <a
              href="#0"
              className={
                celsius === true ? "temp-unit non-active" : "temp-unit active"
              }
              id="fahrenheit-link"
              onClick={changeUnit}
            >
              °F
            </a>
          </p>
        </div>
        <div className="col-lg-5 nopadding">
          <img
            className="big_icon"
            src={require(`./media/${weather.picture}.png`)}
            alt="Clouds"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="weather_text">{weather.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img
            className="the_smallest_icon"
            src={require("./media/wind.png")}
            alt="Wind"
          />
          <span id="wind">{weather.wind}</span>
          <span> km/h</span>
        </div>
        <div className="col-lg-6">
          <img
            className="the_smallest_icon"
            src={require("./media/humidity.png")}
            alt="Drop"
          />
          <span id="humidity">{weather.humidity}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
}
