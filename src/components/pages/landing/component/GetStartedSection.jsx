import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export const GetStartedSection = () => {
  return (
    <>
      <div className="our_margin">
        <Container>
          <Row className="text-center headings mb-5">
            <h1>Let's Get it Started!</h1>
          </Row>
          <Row className="mb-3">
            <Col lg='3'></Col>
            <Col lg="3">
              <Form.Group className="mb-3" controlId="formText">
                {/* <Form.Label>NAME:</Form.Label> */}
                <Form.Control type="text" placeholder="Your Full Name" className="form_input_shadow" />
              </Form.Group>
            </Col>
            <Col lg="3">
              <Form.Group className="mb-3" controlId="formText">
                {/* <Form.Label>PHONE:</Form.Label> */}
                <Form.Control type="number" placeholder="Enter Your Number" className="form_input_shadow" />
              </Form.Group>
            </Col>
            <Col lg='3'></Col>
          </Row>
          <Row>
            <Col lg="3"></Col>
            <Col lg="3">
              <Form.Group className="mb-3">
                {/* <Form.Label>MESSAGE</Form.Label> */}
                <Form.Control type="text" placeholder="Please Type Your Message" className="form_input_shadow"  as="textarea" rows={3} />
              </Form.Group>
            </Col>
            <Col lg="3"></Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
