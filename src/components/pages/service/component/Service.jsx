import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  Button,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

export const Service = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/corporate.png"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Corporate Event Planner</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/couple.png"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Wedding Planner</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/happy_birthday.png"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Birthday Planner</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/party_planner.png"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Party Planner & Decor</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/Wedding_Decorators.png"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Wedding Decoraters</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/floral.png"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Floral Arrangments</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="4">
            <Card className="servic_main">
              <CardImg src="/assets/img/food.png" className="servic_card_img" />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Food</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/catering.png"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Catering</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="servic_main">
              <CardImg
                src="/assets/img/videography.jpg"
                className="servic_card_img"
              />
              <CardBody className="servic_body">
                <CardTitle className="body_titl">
                  <strong>Photography and Vediography Services</strong>
                </CardTitle>
                <CardText className="mx-4 mb-5">
                  Having Barbarian Weddings Solutions or Events Solutions. plan
                  your event means that you'll need to make your special day
                  truly remarkable.
                </CardText>
                <button className="btn btn-ouline-transparent">
                  <strong>See More</strong>
                </button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
