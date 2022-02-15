import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardBody, CardTitle } from "reactstrap";

export const PartyCandleSection = () => {
  return (
    <div style={{ background: "#FFD6BB" }}>
      <Container>
        {/* <Row className="position-relative">
        </Row> */}
        <Row className="p-5 align-items-center position-relative">
          <div className="party_circle"></div>
          <Col lg="5">
            <img
              src="/assets/img/card_img_13.jpg"
              className="party_img_style"
            />
          </Col>
          <Col lg="1"></Col>
          <Col lg="6" className="party_content_style">
            <Card className="party_img_card_style">
              <Card.Body>
                <Card.Title className="text-center">
                  <strong>About Us</strong>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button className="party_btn_style">See More</Button>
          </Col>
          <div className="party_circle_after"></div>
        </Row>
        {/* <Row className="position-relative">
        </Row> */}
      </Container>
    </div>
  );
};
