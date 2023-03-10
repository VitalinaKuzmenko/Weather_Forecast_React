import React from "react";
import "./Section1.css";
import SearchPanel from "./SearchPanel";
import Titles from "./Titles";

export default function Section1({ setCity, weather, search }) {
  return (
    <div className="Section1">
      <SearchPanel setCity={setCity} search={search} />
      <Titles weather={weather} />
    </div>
  );
}
