import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const OurDealSection = () => {
  return (
    <div className="our_margin">
      <Container>
        <Row className="text-center headings mb-5">
          <h1>OUR DEAL</h1>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="our_deal_card_style">
              <Card.Body className="card_deal_body_style">
                <Card.Img
                  variant="top"
                  className="our_deal_img_style"
                  src="/assets/img/card_img_11.png"
                />
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text className="py-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content, Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
                <button className="text-black rounded-pill text-center py-2 px-5">
                  15$
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="our_deal_card_style">
              <Card.Body className="card_deal_body_style">
                <Card.Img
                  variant="top"
                  className="our_deal_img_style"
                  src="/assets/img/card_img_12.png"
                />
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text className="py-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content, Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
                <button className="text-black rounded-pill text-center py-2 px-5">
                  20$
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="our_deal_card_style">
              <Card.Body className="card_deal_body_style">
                <Card.Img
                  variant="top"
                  className="our_deal_img_style"
                  src="/assets/img/card_img_10.png"
                />
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text className="py-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content, Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
                <button className="text-black rounded-pill text-center py-2 px-5">
                  18$
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd6bb"
              fill-opacity="1"
              d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,117.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </Row> */}
      </Container>
    </div>
  );
};
