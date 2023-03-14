import React, { useEffect, useState } from "react";
import "./MainWindow.css";
import Section1 from "./Section1";
import MainSections from "./MainSections";
import Section4 from "./Section4";
import axios from "axios";

export default function MainWindow() {
  //default city
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState({ ready: false });

  //checking celsius or farenheit
  const [celsius, setCelsius] = useState(true);

  //getting data from API when the currentLocation button was clicked
  const searchCurrentLocation = (lat, lon) => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  };

  //getting data from API
  const search = () => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  };

  //calling search function each time city state will changed
  useEffect(() => {
    search();
    console.log("inside useEffect");
    console.log("city is: " + city);
  }, [city]);

  //saving data from API inside setWeather object
  const handleResponse = (response) => {
    console.log(response.data);
    setWeather({
      ready: true,
      unit: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      picture: response.data.weather[0].icon,
    });
  };

  console.log(weather);

  return (
    <>
      {weather.ready ? (
        <div className="MainWindow">
          <Section1
            setCity={setCity}
            weather={weather}
            search={search}
            searchCurrentLocation={searchCurrentLocation}
          />
          <MainSections
            weather={weather}
            celsius={celsius}
            setCelsius={setCelsius}
          />
          <Section4 weather={weather} celsius={celsius} />
        </div>
      ) : null}
    </>
  );
}
