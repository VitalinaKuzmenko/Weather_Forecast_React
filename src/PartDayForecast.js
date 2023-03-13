import React, { useState, useEffect } from "react";
import "./PartDayForecast.css";
import axios from "axios";

export default function PartDayForecast({ time, weather }) {
  const [hourlyWeather, setHourlyWeather] = useState({});
  const [hourlyDescription, setHourlyDescription] = useState("Rain");
  const [picture, setPicture] = useState(`13d`);

  const searchByHour = () => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coordinates.lat}&lon=${weather.coordinates.lon}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
    console.log("search by hour was called");
  };

  const handleResponse = (response) => {
    console.log("partdayforecast");
    console.log(response.data);
    const { data } = response;
    if (data && data.daily && data.daily[0] && data.hourly) {
      setHourlyWeather({
        dayTimeTemperature: Math.round(data.daily[0].temp.day),
        nightTimeTemperature: Math.round(data.daily[0].temp.night),
        hours24: data.hourly,
      });
    }

    console.log("inside handle response");
  };

  //changing picture and description
  const changePictureAndDescription = (num) => {
    if (hourlyWeather !== undefined && hourlyWeather.hours24 !== undefined) {
      for (var i = 0; i < 24; i++) {
        let date = new Date(hourlyWeather.hours24[i].dt * 1000);
        let hour = date.getHours();
        if (hour === num) {
          setHourlyDescription(hourlyWeather.hours24[i].weather[0].description);
          setPicture(hourlyWeather.hours24[i].weather[0].icon);
          console.log(picture, " picture");
        }
      }
    }
  };

  //if time or weather (and location) is changing we need to update info for daytime or nightime
  useEffect(() => {
    searchByHour();
    console.log("calll first function search by hour");
  }, []);

  //checking if we have already data with hours and then updating info
  useEffect(() => {
    if (hourlyWeather.hours24 !== undefined) {
      time === "Daytime"
        ? changePictureAndDescription(12)
        : changePictureAndDescription(3);
    }
    console.log("inside use effect - changing descrtiption and a picture");
  }, [hourlyWeather, time]);

  return (
    <div className="PartDayForecast">
      <div className="part">
        <p>{time}</p>
        <p>
          <span id="day_temperature">{hourlyWeather.dayTimeTemperature}</span>
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
