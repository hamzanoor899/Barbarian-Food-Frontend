import React from "react";
import { BlogCards } from "./component/BlogCards";
import { Container } from "reactstrap";

export const Blog = () => {
  return (
    <Container className="my-5">
      <BlogCards />
    </Container>
  );
};
