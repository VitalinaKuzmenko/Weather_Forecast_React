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
  const [error, setError] = useState(false);

  //checking celsius or fahrenheit
  const [celsius, setCelsius] = useState(true);

  //getting data from API when the currentLocation button was clicked
  const searchCurrentLocation = (lat, lon) => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios
      .get(apiURL)
      .then(handleResponse)
      .catch(() => setError(true));
  };

  //getting data from API
  const search = () => {
    const apiKey = "ce8a5720a4218dbb8ae301a6c1f4ec3e";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    if (city && city.trim() !== "" && city !== weather.city) {
      //only execute API call if city has changed
      axios
        .get(apiURL)
        .then(handleResponse)
        .catch(() => setError(true));
    }
  };

  console.log("the city is: " + city);

  console.log(weather);
  console.log("inside main window");

  //calling search function each time city state will changed
  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  //saving data from API inside setWeather object
  const handleResponse = (response) => {
    setWeather({
      ready: true,
      unit: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      picture: response.data.weather[0].icon,
    });
  };

  return (
    <>
      {weather.ready ? (
        <div className="MainWindow">
          {error ? (
            <div className="error-message">Error loading weather data</div>
          ) : (
            <div>
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
          )}
        </div>
      ) : null}
    </>
  );
}
