import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { DotidPinkSection } from "./DotidPinkSection";
// import styled from "styled-components";

export const FrindlyTeamSection = (props) => {
  return (
    <>
      <Container>
        <Row className="mb-5 text-center align-items-center">
          <DotidPinkSection />
          <Col lg="3">
            <Card className="box_shadow"></Card>
            <div className="pink_style">
            <DotidPinkSection />
          </div>
          </Col>
          <Col lg="3">
            <h2>Friendly Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>About Us</h3>
          </Col>
          <Col lg="3">
            <h2>Perfect Venus</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>Our Venus</h3>
          </Col>
          <Col lg="3">
            <h2>Unique Scenarious</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>Our Parties</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};
