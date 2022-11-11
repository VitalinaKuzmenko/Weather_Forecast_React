import React from "react";
import "./SearchPanel.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SearchPanel() {
  return (
    <div className="SearchPanel">
      <Row>
        <Col lg="9">
          <input
            type="text"
            className="textarea"
            placeholder="Enter a city..."
            id="input"
          />
        </Col>
        <Col lg="3">
          <button className="mb-1" type="button" id="submit-button">
            Search
          </button>
          <button type="button" id="current-place-button">
            Current place
          </button>
        </Col>
      </Row>
    </div>
  );
}
