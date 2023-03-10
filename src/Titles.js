import React from "react";
import "./Titles.css";

export default function Titles({ weather }) {
  return (
    <div className="Titles">
      <h2 className="title_0" id="city">
        {weather.city}
      </h2>
      <h2 className="title_1">
        Last update: <span id="time">22:26</span>
      </h2>
      <h3 className="title_2" id="date">
        Sunday, 22.06.2022
      </h3>
    </div>
  );
}
