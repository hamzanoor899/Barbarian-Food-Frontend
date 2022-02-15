import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

export const Celebrate = () => {
  return (
    <div className="our_margin">
      <Container>
        <Row className="text-center headings mb-5">
          <h1>Celeberate With Us!</h1>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="4">
            <Row>
              <Stack gap={3}>
                <div className="celeberate_img">
                  <img src="/assets/img/card_img_6.jpg" />
                </div>
                <div className="celeberate_img">
                  <img src="/assets/img/card_img_3.png" />
                </div>
              </Stack>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <div className="celeberate_middle_img">
                <img src="/assets/img/card_img_2.png" />
              </div>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <Stack gap={3}>
                <div className="celeberate_img">
                  <img src="/assets/img/card_img_1.png" />
                </div>
                <div className="celeberate_img">
                  <img src="/assets/img/card_img_5.png" />
                </div>
              </Stack>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
