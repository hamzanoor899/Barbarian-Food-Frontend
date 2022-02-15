import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card, CardImg, CardTitle } from "reactstrap";

export const ChooseUs = () => {
  return (
    <div>
      <Container>
          <div className="my-4">
              <h3><strong>WHY CHOOSE US</strong></h3>
          </div>
        <Row>
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/confetti.png" className="choose_img" />
              <CardTitle><strong>Friendly Team</strong></CardTitle>
            </Card>
          </Col>
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/kiss.png" className="choose_img" />
              <CardTitle><strong>Unique scenario</strong></CardTitle>
            </Card>
          </Col>
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/balloons.png" className="choose_img" />
              <CardTitle><strong>Perfect Venues</strong></CardTitle>
            </Card>
          </Col>
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/phone_call.png" className="choose_img" />
              <CardTitle><strong>24/7 Hours Support</strong></CardTitle>
            </Card>
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/confetti.png" className="choose_img" />
              <CardTitle><strong>Unforgetable Times</strong></CardTitle>
            </Card>
          </Col>
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/lightbulb.png" className="choose_img" />
              <CardTitle><strong>Briliant Idea</strong></CardTitle>
            </Card>
          </Col>
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/calendar.png" className="choose_img" />
              <CardTitle><strong>Unique scenario</strong></CardTitle>
            </Card>
          </Col>
          <Col>
            <Card className="choose_card d-flex justify-content-center align-items-center">
              <CardImg src="/assets/img/management.png" className="choose_img" />
              <CardTitle><strong>Best Management</strong></CardTitle>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
