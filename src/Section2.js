import React from "react";
import "./Section2.css";

export default function Section2({ weather }) {
  return (
    <div className="Section2">
      <div className="row">
        <div className="col-lg-7 d-flex align-items-center">
          <p className="temperature_text">
            <span id="temperature">{weather.temperature}</span>
            <a href="#0" className="temp-unit active" id="celsius-link">
              °C
            </a>
            <span className="temp-unit"> | </span>
            <a href="#0" className="temp-unit non-active" id="fahrenheit-link">
              °F
            </a>
          </p>
        </div>
        <div className="col-lg-5">
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
      <div className="row part">
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
