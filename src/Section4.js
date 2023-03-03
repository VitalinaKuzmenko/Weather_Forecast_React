import React from "react";
import "./Section4.css";
import DayForecast from "./DayForecast";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Section4() {
  return (
    <div className="Section4">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
          <DayForecast day="Friday" />
        </div>
        <div className="col-lg d-lg-none small_horizontal_line"></div>
        <div className="col-lg-2">
          <DayForecast day="Saturday" />
        </div>
        <div className="col-lg d-lg-none small_horizontal_line"></div>
        <div className="col-lg-2">
          <DayForecast day="Sunday" />
        </div>
        <div className="col-lg d-lg-none small_horizontal_line"></div>
        <div className="col-lg-2">
          <DayForecast day="Monday" />
        </div>
        <div className="col-lg d-lg-none small_horizontal_line"></div>
        <div className="col-lg-2">
          <DayForecast day="Tuesday" />
        </div>
        <div className="col-lg d-lg-none small_horizontal_line"></div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}
