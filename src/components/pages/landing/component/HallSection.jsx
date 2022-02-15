import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CardBody, CardTitle } from "reactstrap";
import { DotidSection } from "./DotidSection";

export const HallSection = () => {
  const styleCard = {
    position: "absolute",
    top: "258px",
    left: "100px",
    text: "center",
    width: "auto",
    height: "auto",
    backgroundColor: "white",
    borderRadius: "20px",
    fontSize: "50px",
    fontWeight: "bolder",
    padding: "38px 85px 80px",
    textAlign: "center",
  };
  return (
    <div style={{ background: "#FFD6BB" }}>
      <Container>
        <Row>
          <Col className="dotid_style">
            <Row>
              <DotidSection />
            </Row>
          </Col>
          <Card style={styleCard} className="responsive_event_planner">
            <CardBody>
              <CardTitle>
                ONE-STOP <br /> EVENT PLANNER
              </CardTitle>
            </CardBody>
          </Card>
          <Col className="dotid_next_style">
            <Row>
              <DotidSection />
            </Row>
          </Col>
          <Col lg="10">
            <div className="banquet_img_style"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
