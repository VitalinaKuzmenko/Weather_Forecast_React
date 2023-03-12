import React, { useState, useEffect } from "react";
import "./PartDayForecast.css";
import axios from "axios";

export default function PartDayForecast({ time, weather }) {
  const [hourlyWeather, setHourlyWeather] = useState({});
  // const [dayDescription, setDayDescription] = useState("");
  // const [nightDescription, setNightDescription] = useState("");
  // const [dayPicture, setDayPicture] = useState("");
  // const [nightPicture, setNightPicture] = useState("");
  const [hourlyDescription, setHourlyDescription] = useState("");
  const [picture, setPicture] = useState("");

  const searchByHour = () => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coordinates.lat}&lon=${weather.coordinates.lon}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
    console.log("search by hour was called");
  };

  const handleResponse = (response) => {
    console.log("here");
    console.log(response.data);
    setHourlyWeather({
      dayTimeTemperature: Math.round(response.data.daily[0].temp.day),
      nightTimeTemperature: Math.round(response.data.daily[0].temp.night),
      hours24: response.data.hourly,
    });

    time === "Daytime"
      ? changePictureAndDescription(12)
      : changePictureAndDescription(3);
  };

  //changing picture and description
  const changePictureAndDescription = (num) => {
    for (var i = 0; i < 24; i++) {
      let date = new Date(hourlyWeather.hours24[i].dt * 1000);
      let hour = date.getHours();
      if (hour === num) {
        setHourlyDescription(hourlyWeather.hours24[i].weather[0].description);
        setPicture(hourlyWeather.hours24[i].weather[0].icon);
        console.log(picture, " picture");
      }
    }
  };

  useEffect(() => {
    searchByHour();
  }, [time, weather]);

  return (
    <div className="PartDayForecast">
      <div className="part">
        <p>{time}</p>
        <p>
          <span id="day_temperature">
            {setHourlyWeather.dayTimeTemperature}
          </span>
          <span className="unit">°C</span>
        </p>

        {/* <img
          className="medium_icon"
          id="day_icon"
          src={require(`./media/${picture}.png`)}
          alt="Sunny"
        /> */}
        <p id="day-description">{hourlyDescription}</p>
      </div>
    </div>
  );
}
