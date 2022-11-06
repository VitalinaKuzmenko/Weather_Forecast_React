import React from "react";
import "./MainSections.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainSections() {
  return (
    <div className="MainSections">
      <Row>
        <Col xxl="5">
          {" "}
          <Section2 />
        </Col>
        <Col xxl="1" className="d-none d-lg-block vertical_line"></Col>
        <Col xxl="1" className="col d-lg-none horizontal_line"></Col>
        <Col xxl="5">
          {" "}
          <Section3 />
        </Col>
      </Row>
      <Row>
        <div className="col horizontal_line"></div>
      </Row>
    </div>
  );
}

{
  /* <div className="col-5">
<Section2 />
</div>
<div className="col-1 d-none d-lg-block vertical_line"></div>
<div className="col d-lg-none horizontal_line"></div>
<div className="col-5">
<Section3 />
</div> */
}
