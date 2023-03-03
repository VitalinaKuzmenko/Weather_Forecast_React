import React from "react";
import "./SearchPanel.css";

export default function SearchPanel() {
  return (
    <div className="SearchPanel">
      <div className="row">
        <div className="col-lg-9">
          {" "}
          <input
            type="text"
            className="textarea"
            placeholder="Enter a city..."
            id="input"
          />
        </div>

          <button className="mb-1" type="button" id="submit-button">
            Search
          </button>
          <button type="button" id="current-place-button">
            Current place
          </button>
        </div>
      </div>
    </div>
  );
}
