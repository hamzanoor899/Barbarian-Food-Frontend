import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export const ContactUs = () => {
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col>
            <Card className="contact_main">
              <CardImg
                src="/assets/img/ringing.png"
                className="contact_card_img"
              ></CardImg>
              <CardBody className="contact_body">
                <CardTitle className="body_titl">
                  <strong>Have Query? Contact Us</strong>
                </CardTitle>
                <CardText>
                  If you have a Event related questions and need to speak to our
                  team, you can contact our information support services.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="contact_main">
              <CardImg
                src="/assets/img/email.png"
                className="contact_card_img"
              ></CardImg>
              <CardBody className="contact_body">
                <CardTitle className="body_titl">
                  <strong>Drop Us A Line</strong>
                </CardTitle>
                <CardText>
                  If you have a Event related questions and need to speak to our
                  team, you can contact our information support services.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="contact_main">
              <CardImg
                src="/assets/img/location.png"
                className="contact_card_img"
              ></CardImg>
              <CardBody className="contact_body">
                <CardTitle className="body_titl">
                  <strong>Come & Meet Us</strong>
                </CardTitle>
                <CardText>
                  If you have a Event related questions and need to speak to our
                  team, you can contact our information support services.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="6" className="d-flex flex-column justify-content-around">
            <Card className="card_shadow">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <CardImg
                  src="/assets/img/phone-call.png"
                  className="card_shadow_img"
                ></CardImg>
                <CardTitle className="m-0 fs-4">
                  <strong>Call Us directly at</strong>
                </CardTitle>
              </div>
              <CardText>See all number and location</CardText>
            </Card>
            <Card className="card_shadow">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <CardImg
                  src="/assets/img/chat.png"
                  className="card_shadow_img"
                ></CardImg>
                <CardTitle className="m-0 fs-4">
                  <strong>Call Us directly at</strong>
                </CardTitle>
              </div>
              <span className="color_bg"></span>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card_shadow_form">
              <CardTitle className="text-center fs-1">
                <strong>Book a Meeting</strong>
              </CardTitle>
              <Form>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="">Full Name*</Label>
                      <Input type="text" name="name" id="" placeholder="" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="">Email ID*</Label>
                      <Input type="email" name="email" id="" placeholder="" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="">Phone Number*</Label>
                      <Input type="number" name="name" id="" placeholder="" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="">Services*</Label>
                      <Input
                        type="service"
                        name="service"
                        id=""
                        placeholder="Please Any Services"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="">Event Starting Date*</Label>
                      <Input type="date" name="date" id="" placeholder="" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="">Event Ending Date*</Label>
                      <Input type="date" name="date" id="" placeholder="" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="flex-column align-items-center">
                  <Col>
                    <FormGroup>
                      <Label for="">Description</Label>
                      <Input type="textarea" name="text" id="" placeholder="" />
                    </FormGroup>
                  </Col>
                <button className="btn_submit">Submit</button>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row className="text-center headings mt-5">
          <h1>Find Us Here</h1>
        </Row>
      </Container>
    </>
  );
};
