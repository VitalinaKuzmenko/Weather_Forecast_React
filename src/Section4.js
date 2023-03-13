import React, { useState, useEffect } from "react";
import "./Section4.css";
import DayForecast from "./DayForecast";
import axios from "axios";

export default function Section4({ weather }) {
  const [dailyData, setDailyData] = useState([]);
  const [dayForecasts, setDayForecasts] = useState([]);

  //format miliseconds into day (String)
  const formatDay = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  };

  //if weather (and location) is changing we need to update info
  useEffect(() => {
    searchByDay();
  }, [weather]);

  //getting data from api
  const searchByDay = () => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coordinates.lat}&lon=${weather.coordinates.lon}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then((response) => {
      if (response.data !== undefined) {
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

        setDailyData(response.data.daily);

        console.log(response.data.daily);
      }
    });
  };

  //update day forecasts when daily data changes
  useEffect(() => {
    if (dailyData.length > 0) {
      const forecasts = dailyData.slice(0, 5).map((obj) => {
        return {
          day: formatDay(obj.dt),
          picture: obj.weather[0].icon,
          description: obj.weather[0].description,
          maxTemp: Math.round(obj.temp.max),
          minTemp: Math.round(obj.temp.min),
        };
      });
      setDayForecasts(forecasts);
    }
  }, [dailyData]);

  return (
    <div className="Section4">
      <div className="row">
        <div className="col-lg-1"></div>

        {dayForecasts.map((dayForecast, index) => {
          return (
            <div className="col-lg-2" key={index + "0"}>
              <DayForecast dayForecast={dayForecast} />;
            </div>
          );
        })}
        <div className="col-lg d-lg-none small_horizontal_line"></div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}
