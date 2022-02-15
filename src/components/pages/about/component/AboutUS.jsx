import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const AboutUS = () => {
  return (
    <Container className="p-5">
      <Row className="margin_content align-items-center">
        <Col>
          <div className="about_vision_text">
            <h2>Our Vision</h2>
            <p>
              To become the largest online learning ecosystem for continuing
              education, in partnership with corporates and acadmia. To become
              the largest online learning ecosystem for continuing education, in
              partnership with corporates and acadmia.{" "}
            </p>
          </div>
        </Col>
        <Col>
          <div className="about_vision_img">
            <img src="/assets/img/vision.jpg" />
          </div>
        </Col>
      </Row>
      <Row className="margin_content align-items-center">
        <Col>
          <div className="about_vision_img">
            <img src="/assets/img/card_img_9.jpg" />
          </div>
        </Col>
        <Col>
          <div className="about_vision_text">
            <h2>Our Approch</h2>
            <p>
              To become the largest online learning ecosystem for continuing
              education, in partnership with corporates and acadmia. To become
              the largest online learning ecosystem for continuing education, in
              partnership with corporates and acadmia.{" "}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="margin_content align-items-center">
        <Col>
          <div className="about_vision_text">
            <h2>Our Process</h2>
            <p>
              To become the largest online learning ecosystem for continuing
              education, in partnership with corporates and acadmia. To become
              the largest online learning ecosystem for continuing education, in
              partnership with corporates and acadmia.{" "}
            </p>
          </div>
        </Col>
        <Col>
          <div className="about_vision_img">
            <img src="/assets/img/process.jpg" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
