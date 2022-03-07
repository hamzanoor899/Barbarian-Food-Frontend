import React from "react";
import axios from "axios";
import { useState } from "react";
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
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    starting_date: "",
    ending_date: "",
    description: "",
  });

  const name = (e) => {
    setFormValue({ ...formValue, name: e.target.value });
  };

  const email = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };

  const phone = (e) => {
    setFormValue({ ...formValue, phone: e.target.value });
  };

  const service = (e) => {
    setFormValue({ ...formValue, services: e.target.value });
  };

  const starting_date = (e) => {
    setFormValue({ ...formValue, starting_date: e.target.value });
  };

  const ending_date = (e) => {
    setFormValue({ ...formValue, ending_date: e.target.value });
  };

  const description = (e) => {
    setFormValue({ ...formValue, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: formValue.name,
      email: formValue.email,
      phone: formValue.phone,
      services: formValue.services,
      starting_date: formValue.starting_date,
      ending_date: formValue.ending_date,
      description: formValue.description,
    };
    axios
      .post("http://localhost:4003/post", userData)
      .then((data) => console.log(data.userData))
      .catch((err) => console.log(err));
    setFormValue({
      name: "",
      email: "",
      phone: "",
      services: "",
      starting_date: "",
      ending_date: "",
      description: "",
    });
  };

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
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Full Name*</Label>
                      <Input
                        type="text"
                        value={formValue.name}
                        onChange={name}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Email ID*</Label>
                      <Input
                        type="email"
                        value={formValue.email}
                        onChange={email}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Phone Number*</Label>
                      <Input
                        type="number"
                        value={formValue.phone}
                        onChange={phone}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Services*</Label>
                      <Input
                        type="service"
                        placeholder="Please Any Services"
                        value={formValue.services}
                        onChange={service}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Event Starting Date*</Label>
                      <Input
                        type="date"
                        value={formValue.starting_date}
                        onChange={starting_date}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Event Ending Date*</Label>
                      <Input
                        type="date"
                        value={formValue.ending_date}
                        onChange={ending_date}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="flex-column align-items-center">
                  <Col>
                    <FormGroup>
                      <Label>Description</Label>
                      <Input
                        type="textarea"
                        value={formValue.description}
                        onChange={description}
                      />
                    </FormGroup>
                  </Col>
                  <button className="btn_submit" type="submit">
                    Submit
                  </button>
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
