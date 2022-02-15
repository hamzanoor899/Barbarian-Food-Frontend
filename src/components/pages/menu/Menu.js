import { Carousel } from "bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MenuBanner } from "./component/MenuBanner";
import { MenuCard } from "./component/MenuCard";
import { MenuCard2 } from "./component/MenuCard2";

export const Menu = () => {
  return (
    <>
      <MenuBanner />
      <Container className="my-5">
        <Row className="margin_bottom">
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
        </Row>
        <Row className="margin_bottom">
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
        </Row>
        <Row>
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
          <Col md="4" className="d-flex justify-content-center">
            <MenuCard />
          </Col>
        </Row>
      </Container>
      <div className="bg_color_menu_card2 margin_menu_cards position-relative">
        <div className="menu_circle_before_left"></div>
        <div className="menu_circle_before_right"></div>
        <MenuCard2 />
      </div>
    </>
  );
};
