import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CardBody } from "reactstrap";
import { Container } from "react-bootstrap";

export const FragmentSection = () => {
  return (
    <>
      <Container className="bg-white">
        <Row className="fragment_style">
          <Col>
            <h2>City</h2>
            <h4>Select City</h4>
          </Col>
          <Col>
            <h2>Services</h2>
            <h4>Select Services</h4>
          </Col>
          <Col className="text-end">
            <img src="/assets/img/search.png" className="search_icon"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
