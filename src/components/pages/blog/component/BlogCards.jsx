import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
} from "reactstrap";
import { FaRegFolderOpen } from "react-icons/fa";
import { BsCalendar4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import data from "./data/blogsData";

export const BlogCards = () => {
  const [allData] = useState(data);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col md="4">
            <Form>
              <FormGroup className="position-relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="input_text"
                  onChange={(event) => handleSearch(event)}
                />
                <BiSearch size={20} className="search" />
              </FormGroup>
            </Form>
          </Col>
          <Col md="4">
            <CardTitle className="text-center headings my-5">
              <h1>Blog</h1>
            </CardTitle>
          </Col>
          <Col md="4"></Col>
        </Row>
        <Row>
          <Col md="4">
            <Card className="blog_cards mb-5">
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
            <Card className="blog_cards mb-5">
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
          <Col className="flex_conten">
            {filteredData.map((data) => (
              <Card className="blog_cards_category mr-4" key={data.url}>
                <CardImg
                  top
                  width="100px"
                  className="blog_imgs"
                  src={data.url}
                  alt={data.name}
                />
                <CardBody className="blog_body_content">
                  <Link to="/blogdetail">
                    <CardTitle className="headings">
                      <h3>{data.title}</h3>
                    </CardTitle>
                  </Link>
                  <div className="d-flex">
                    <FaRegFolderOpen size={30} />
                    <CardTitle className="blog_info">
                      {data.blogs_post}
                    </CardTitle>
                  </div>
                  <div className="d-flex">
                    <FaUser size={30} />
                    <CardTitle className="blog_info">{data.user}</CardTitle>
                  </div>
                  <div className="d-flex">
                    <BsCalendar4 size={30} />
                    <CardTitle className="blog_info">{data.calender}</CardTitle>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
