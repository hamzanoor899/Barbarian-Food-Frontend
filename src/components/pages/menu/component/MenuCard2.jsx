import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const MenuCard2 = () => {
  return (
    <Container className="p-5">
      <Row className="mb-4">
        <Col md="2"></Col>
        <Col md="4" className="d-flex justify-content-center">
          <ul className="list-unstyled">
            <h4>Chicken</h4>
            <li>chiken seekh kabab</li>
            <li>Chicken Bons</li>
            <li>chiken malai boti</li>
            <li>Mutton Karahai</li>
            <li>Chicken Karahai</li>
            <li>Beaf Karahai</li>
          </ul>
        </Col>
        <Col md="4" className="d-flex justify-content-center">
          <ul className="list-unstyled">
            <h4>Mutton</h4>
            <li>chiken seekh kabab</li>
            <li>Chicken Bons</li>
            <li>chiken malai boti</li>
            <li>Mutton Karahai</li>
            <li>Chicken Karahai</li>
            <li>Beaf Karahai</li>
          </ul>
        </Col>
        <Col md="2"></Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="4" className="d-flex justify-content-center">
          <ul className="list-unstyled">
            <h4>Sea Food</h4>
            <li>chiken seekh kabab</li>
            <li>Chicken Bons</li>
            <li>chiken malai boti</li>
            <li>Mutton Karahai</li>
            <li>Chicken Karahai</li>
            <li>Beaf Karahai</li>
          </ul>
        </Col>
        <Col md="4" className="d-flex justify-content-center">
          <ul className="list-unstyled">
            <h4>Continental</h4>
            <li>chiken seekh kabab</li>
            <li>Chicken Bons</li>
            <li>chiken malai boti</li>
            <li>Mutton Karahai</li>
            <li>Chicken Karahai</li>
            <li>Beaf Karahai</li>
          </ul>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};
