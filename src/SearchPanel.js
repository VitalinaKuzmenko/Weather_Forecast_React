import React from "react";
import "./SearchPanel.css";

export default function SearchPanel({ setCity, search }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
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
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <button className="mb-1" type="button" onClick={handleSubmit}>
            Search
          </button>
          <button type="button">Current place</button>
        </div>
      </form>
    </div>
  );
}
