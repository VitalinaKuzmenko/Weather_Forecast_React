import React from "react";
import "./Section3.css";
import PartDayForecast from "./PartDayForecast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Section3() {
  return (
    <div className="Section3">
      <Row>
        <Col xxl="6">
          <PartDayForecast time="Daytime" />
        </Col>
        <Col xxl="6">
          <PartDayForecast time="Nightime" />
        </Col>
      </Row>
    </div>
  );
}
