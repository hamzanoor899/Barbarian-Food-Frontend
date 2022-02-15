import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function hover() {
  let cardBody = document.querySelector('.card_body_style');
  cardBody.style.display = 'block';
  cardBody.style.position = 'absolute';
  cardBody.style.transition = 'all 0.7s 0s ease';
}
function out() {
  let cardBody = document.querySelector('.card_body_style');
  cardBody.style.display = 'none';
}

function hover1() {
  let cardBody = document.querySelector('.card_body_style_1');
  cardBody.style.display = 'block';
  cardBody.style.position = 'absolute';
  cardBody.style.transition = 'all 0.7s 0s ease';
}
function out_1() {
  let cardBody = document.querySelector('.card_body_style_1');
  cardBody.style.display = 'none';
}

function hover3() {
  let cardBody = document.querySelector('.card_body_style_2');
  cardBody.style.display = 'block';
  cardBody.style.position = 'absolute';
  cardBody.style.transition = 'all 0.7s 0s ease';
}
function out_2() {
  let cardBody = document.querySelector('.card_body_style_2');
  cardBody.style.display = 'none';
}


export const OurServicesSection = () => {
  return (
    <div className="our_margin">
      <Container>
        <Row className="text-center headings mb-5">
          <h1>OUR SERVICES</h1>
        </Row>
        <Row className="d-flex jsutify-content-center">
        <Col lg="4">
            <Card className="our_services_card_style" id="onMouseOver2" onMouseOver={hover3} onMouseOut={out_2}>
              <Card.Img variant="top" src="/assets/img/card_img_4.jpg" className="our_services_img_style" />
              <Card.Body className="card_body_style_2">
                <Card.Title><strong>Graduation Parties</strong></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content, Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="our_services_card_style" id="onMouseOver" onMouseOver={hover} onMouseOut={out}>
              <Card.Img variant="top" src="/assets/img/card_img_8.jpg" className="our_services_img_style" />
              <Card.Body className="card_body_style">
                <Card.Title><strong>Birthday Parties</strong></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content, Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="our_services_card_style" id="onMouseOver2" onMouseOver={hover1} onMouseOut={out_1}>
              <Card.Img variant="top" src="/assets/img/card_img_7.png" className="our_services_img_style" />
              <Card.Body className="card_body_style_1">
                <Card.Title><strong>Family Celeberations</strong></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content, Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
