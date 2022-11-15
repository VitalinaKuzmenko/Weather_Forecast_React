import React from "react";
import "./Section2.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Section2() {
  return (
    <div className="Section2">
      <Row>
        <Col lg="7">
          <p className="temperature_text">
            <span id="temperature">15</span>
            <a href="#0" className="temp-unit active" id="celsius-link">
              °C
            </a>
            <span className="temp-unit"> | </span>
            <a href="#0" className="temp-unit non-active" id="fahrenheit-link">
              °F
            </a>
          </p>
        </Col>
        <Col lg="5">
          <img
            className="big_icon"
            src={require("./media/03d.png")}
            alt="Clouds"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="weather_text">Clouds</p>
        </Col>
      </Row>
      <Row className="part">
        <Col lg="6">
          <img
            className="the_smallest_icon"
            src={require("./media/wind.png")}
            alt="Wind"
          />
          <span id="wind">4</span>
          <span> km/h</span>
        </Col>
        <Col lg="6">
          {" "}
          <img
            className="the_smallest_icon"
            src={require("./media/humidity.png")}
            alt="Drop"
          />
          <span id="humidity">58</span>
          <span>%</span>
        </Col>
      </Row>
    </div>
  );
}
