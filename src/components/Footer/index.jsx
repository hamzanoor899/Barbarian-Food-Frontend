import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer_main_container">
        <Container className="footer_sub">
          <Row className="d-flex align-items-center h_content">
            <Col md="3">
              <div className="text_padding">
                <Link to="/">
                  <img
                    src="/assets/img/Barbarian_Food_logo.png"
                    className="barbarian_logo"
                  />
                </Link>
              </div>
            </Col>
            <Col md="6">
              <Row>
                <Col md="4" className="list-unstyled">
                  <h3>Company</h3>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                </Col>
                <Col md="4" className="list-unstyled">
                  <h3>Services</h3>
                  <li>Birthday parties</li>
                  <li>Family parties</li>
                  <li>Graduate parties</li>
                </Col>
                <Col md="4" className="list-unstyled">
                  <h3>Legal</h3>
                  <li>Terms and Conditions</li>
                  <li>Privacy policy</li>
                </Col>
              </Row>
            </Col>
            <Col md="3">
              <h3>News Letter</h3>
              <FormGroup className="m-0">
                <Label htmlFor="input">
                  <Input type="email" name="email" id="input" />
                </Label>
              </FormGroup>
              <button className="btn btn-outline-dark">subscribe</button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright_style">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="d-flex flex-column align-items-center copy_right">
              <h4>
                Copyright&copy; Barbarians Solutions Managment. 2022 All Rights
                Reserved
              </h4>
              <div className="social_icons">
                <BsFacebook className="icons" />
                <AiFillInstagram className="icons" />
                <AiFillTwitterCircle className="icons" />
                <AiFillDribbbleCircle className="icons" />
                <BsPinterest className="icons" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
