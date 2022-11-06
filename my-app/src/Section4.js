import React from "react";
import "./Section4.css";
import DayForecast from "./DayForecast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Section4() {
  return (
    <div className="Section4">
      <Row>
        <Col lg="1"></Col>
        <Col lg="2">
          <DayForecast day="Friday" />
        </Col>
        <Col lg className="d-lg-none small_horizontal_line"></Col>
        <Col lg="2">
          <DayForecast day="Saturday" />
        </Col>
        <Col lg className="d-lg-none small_horizontal_line"></Col>
        <Col lg="2">
          <DayForecast day="Sunday" />
        </Col>
        <Col lg className="d-lg-none small_horizontal_line"></Col>
        <Col lg="2">
          <DayForecast day="Monday" />
        </Col>
        <Col lg className="d-lg-none small_horizontal_line"></Col>
        <Col lg="2">
          <DayForecast day="Tuesday" />
        </Col>
        <Col lg="1"></Col>
      </Row>
    </div>
  );
}
