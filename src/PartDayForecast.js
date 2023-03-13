import React, { useState, useEffect } from "react";
import "./PartDayForecast.css";
import axios from "axios";

export default function PartDayForecast({ time, weather }) {
  const [hourlyWeather, setHourlyWeather] = useState({});
  const [hourlyDescription, setHourlyDescription] = useState("Rain");
  const [picture, setPicture] = useState(`13d`);
  const [temperature, setTemperature] = useState(0);

  const searchByHour = () => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coordinates.lat}&lon=${weather.coordinates.lon}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  };

  const handleResponse = (response) => {
    console.log("partdayforecast");
    console.log(response.data);
    const { data } = response;
    if (data && data.daily && data.daily[0] && data.hourly) {
      const updatedWeather = {
        ...hourlyWeather,
        dayTimeTemperature: Math.round(data.daily[0].temp.day),
        nightTimeTemperature: Math.round(data.daily[0].temp.night),
        hours24: data.hourly,
      };
      setHourlyWeather(updatedWeather);
    }
  };

  //changing picture and description
  const updatePicAndDescAndTemp = (num) => {
    if (hourlyWeather !== undefined && hourlyWeather.hours24 !== undefined) {
      for (var i = 0; i < 24; i++) {
        let date = new Date(hourlyWeather.hours24[i].dt * 1000);
        let hour = date.getHours();

        if (hour === num) {
          setHourlyDescription(hourlyWeather.hours24[i].weather[0].description);
          setPicture(hourlyWeather.hours24[i].weather[0].icon);
        }
      }
    }
  };

  //if time or weather (and location) is changing we need to update info for daytime or nighttime
  useEffect(() => {
    searchByHour();
  }, [time, weather]);

  //checking if we have already data with hours and then updating info
  useEffect(() => {
    if (hourlyWeather.hours24 !== undefined) {
      if (time === "Daytime") {
        updatePicAndDescAndTemp(12);
        setTemperature(hourlyWeather.dayTimeTemperature);
      } else {
        updatePicAndDescAndTemp(3);
        setTemperature(hourlyWeather.nightTimeTemperature);
      }
    }
  }, [hourlyWeather, time]);

  return (
    <div className="PartDayForecast">
      <div className="part">
        <p>{time}</p>
        <p>
          <span id="day_temperature">{temperature}</span>
          <span className="unit">°C</span>
        </p>

        <img
          className="medium_icon"
          src={require(`./media/${picture}.png`)}
          alt={hourlyDescription}
        />
        <p id="day-description">{hourlyDescription}</p>
      </div>
    </div>
  );
}
