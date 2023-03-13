import React, { useState } from "react";
import "./SearchPanel.css";

export default function SearchPanel({ setCity, search }) {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(searchCity);
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
          <button type="button">Current place</button>
        </div>
      </form>
    </div>
  );
}
