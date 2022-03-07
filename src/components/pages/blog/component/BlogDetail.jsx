import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Container,
  FormGroup,
  Row,
} from "reactstrap";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

export const BlogDetail = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col md="4">
          <FormGroup className="position-relative mb-5">
            <input type="search" placeholder="Search" className="input_text" />
            <BiSearch size={20} className="search" />
          </FormGroup>
          <Card className="blog_cards">
            <Row className="headings">
              <h2 className="m-4">Categories</h2>
            </Row>
            <CardBody>
              <ul className="blog_list_style list-unstyled">
                <li className="border_bottom"></li>
                <li className="border_bottom">Corporate Event Planner</li>
                <li className="border_bottom">Wedding Planner</li>
                <li className="border_bottom">Birthday Planner</li>
                <li className="border_bottom">Party Planner & Decor</li>
                <li className="border_bottom">Wedding Decorators</li>
                <li className="border_bottom">Floral Arrangements</li>
                <li className="border_bottom">Food</li>
              </ul>
            </CardBody>
          </Card>
          <Card className="blog_cards detail_card_post">
            <Row className="headings">
              <h2 className="m-4">Top Posts</h2>
            </Row>
          </Card>
          <Card className="blog_cards">
            <Row className="headings">
              <h2 className="m-4">Top Posts</h2>
            </Row>
          </Card>
        </Col>
        <Col md="8">
          <Row>
            <CardImg src="/assets/img/blog_1.jpg" className="blog_detail_img" />
            <CardBody className="blog_detail_body mt-4">
              <CardText className="detail_text">
                Every wedding has the write to be celebrated properly. Every
                Segment has many sentiments and feelingsattached. A wedding is
                an event which causes to get close a new relations not only
                between newlyweds husband and wife but between the two families.
              </CardText>
              <CardText className="detail_text">
                We at barbaraian solutions as a Wedding planner in lahore knows
                the importance of the event. we are fully trained and experts to
                make your wedding stands out from the crowd. Mehndi is one of
                the Major Eevents from the wedding events
              </CardText>
              <CardText className="detail_text">
                Being in Pakistan Mehndi events is celebrated with great
                excitement, If I say that the multicolored event has
                multidimensional sentiments and plans to perfom on the day, So
                this would't be the wrong. Mehndi is the tradition of putting
                mehndi(Hena).
              </CardText>
            </CardBody>
          </Row>
          <Row>
            <CardImg
              src="/assets/img/blog_3.jpg"
              className="blog_detail_img_1"
            />
            <CardBody className="blog_detail_body mt-5">
              <CardText className="detail_text">
                Being in Pakistan Mehndi events is celebrated with great
                excitement, If I say that the multicolored event has
                multidimensional sentiments and plans to perfom on the day, So
                this would't be the wrong. Mehndi is the tradition of putting
                mehndi(Hena).
              </CardText>
            </CardBody>
          </Row>
        </Col>
      </Row>
      <Row>
        <li className="border_bottom list-unstyled"></li>
      </Row>
      <Row className="my-5">
        <Col>
          <Link to="/blog">
            <button className="btn btn_detail_prev">Previous</button>
          </Link>
        </Col>
      </Row>
      <Row>
        <li className="border_bottom list-unstyled"></li>
      </Row>
      <Row className="mt-5">
        <Col>
          <ul className="blog_list_style list-unstyled">
            <li className="border_text">
              <strong>Leave A Reply</strong>
            </li>
            <li className="border_text">
              Your email address will not be published.
            </li>
            <li className="border_bottom border_text">
              <input type="text" placeholder="Comment" for="text" />
            </li>
            <li className="border_bottom border_text">
              <input type="text" placeholder="Name (required)" for="text" />
            </li>
            <li className="border_bottom border_text">
              <input type="text" placeholder="Email (required)" for="text" />
            </li>
            <li className="border_bottom border_text">
              <input type="text" placeholder="Website" for="text" />
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <button className="btn btn_detail_prev">Post comment</button>
        </Col>
      </Row>
    </Container>
  );
};
