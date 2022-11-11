import React from "react";
import "./Section1.css";
import SearchPanel from "./SearchPanel";
import Titles from "./Titles";

export default function Section1() {
  return (
    <div className="Section1">
      <SearchPanel />
      <Titles />
    </div>
  );
}
