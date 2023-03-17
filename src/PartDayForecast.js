import React, { useState, useEffect } from "react";
import "./PartDayForecast.css";
import axios from "axios";

export default function PartDayForecast({ time, weather, celsius }) {
  const [hourlyWeather, setHourlyWeather] = useState({});
  const [hourlyDescription, setHourlyDescription] = useState("Rain");
  const [picture, setPicture] = useState(`13d`);
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState("°C");

  const searchByHour = () => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coordinates.lat}&lon=${weather.coordinates.lon}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  };

  const handleResponse = (response) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, weather]);

  //checking if we have already data with hours and which unit we need to show and then updating info
  useEffect(() => {
    if (hourlyWeather.hours24 !== undefined) {
      if (time === "Day" && celsius === true) {
        updatePicAndDescAndTemp(12);
        setUnit("°C");
        setTemperature(hourlyWeather.dayTimeTemperature);
      } else if (time === "Day" && celsius === false) {
        updatePicAndDescAndTemp(12);
        setUnit("°F");
        setTemperature(Math.round(hourlyWeather.dayTimeTemperature * 1.8 + 32));
      } else if (time === "Night" && celsius === true) {
        updatePicAndDescAndTemp(3);
        setUnit("°C");
        setTemperature(hourlyWeather.nightTimeTemperature);
      } else if (time === "Night" && celsius === false) {
        updatePicAndDescAndTemp(3);
        setUnit("°F");
        setTemperature(
          Math.round(hourlyWeather.nightTimeTemperature * 1.8 + 32)
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hourlyWeather, time, celsius]);

  return (
    <div className="PartDayForecast col-6 part">
      <p>{time}</p>
      <p>
        <span id="day_temperature">{temperature}</span>
        <span className="unit">{unit}</span>
      </p>

      <img
        className="medium_icon"
        src={require(`./media/${picture}.png`)}
        alt={hourlyDescription}
      />
      <p id="day-description">{hourlyDescription}</p>
    </div>
  );
}
