import React, { useState } from "react";
import "./SearchPanel.css";

export default function SearchPanel({ setCity, searchCurrentLocation }) {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(searchCity);
  };

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
    <div className="SearchPanel">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-9">
            <input
              type="text"
              className="textarea"
              placeholder="Enter a city..."
              id="input"
              onChange={(event) => setSearchCity(event.target.value)}
            />
          </div>
          <button className="mb-1" type="submit">
            Search
          </button>
          <button type="button" onClick={handleCurrentLocation}>
            Current place
          </button>
        </div>
      </form>
    </div>
  );
}
