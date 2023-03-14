import React, { useState } from "react";
import "./SearchPanel.css";

export default function SearchPanel({ setCity, searchCurrentLocation }) {
  const [searchCity, setSearchCity] = useState("");

  //when submit form, search for city
  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(searchCity);
    setSearchCity("");
  };

  //geting position of current location and passing it to the main window
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        searchCurrentLocation(lat, lon);
      });
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="SearchPanel">
      <div className="row">
        <div className="col-lg-9">
          <input
            type="text"
            className="textarea"
            placeholder="Enter a city..."
            id="input"
            value={searchCity}
            onChange={(event) => setSearchCity(event.target.value)}
          />
        </div>
        <div className="col-lg-3 center-buttons">
          <button className="mb-1" type="submit">
            Search
          </button>
          <button type="button" onClick={handleCurrentLocation}>
            Current place
          </button>
        </div>
      </div>
    </form>
  );
}
