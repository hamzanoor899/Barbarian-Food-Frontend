import React from "react";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import "../../assets/css/main.css";
import { Link } from "react-router-dom";


function hover() {
  let login = document.querySelector(".login");
  login.style.display = "block";
}

function out() {
  let login = document.querySelector(".login");
  login.style.display = "none";
}

function sevic() {
  let service_dropdown = document.querySelector(".service_dropdown");
  service_dropdown.style.display = "block";
  service_dropdown.style.width = "154px";
}

function down() {
  let service_dropdown = document.querySelector(".service_dropdown");
  service_dropdown.style.display = "none";
}

export const Header = () => {
  return (
    <>
      <Navbar bg="" expand="lg" style={{ background: "#FFD6BB" }}>
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <Link to="/">
              <img src="/assets/img/Barbarian_Food_logo.png" className="barbarian_logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <span className="margin_style">
                <Nav>
                  <Link to="/menu">MENU</Link>
                </Nav>
                <Link to="/services" className="" onMouseOver={sevic} onMouseOut={down}>
                    <li>SERVICES</li>
                    <div className="service_dropdown">
                    <NavDropdown.Item>
                      <Link to="#">Birthday parties</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="#">Family Parties</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="#">Graduate Prties</Link>
                    </NavDropdown.Item>
                    </div>
                    
                </Link>
                <Nav>
                  <Link to="/about">ABOUT</Link>
                </Nav>
                <Nav>
                  <Link to="/blog">BLOG</Link>
                </Nav>
                <Nav>
                  <Link to="/contact">CONTACT</Link>
                </Nav>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="user_logo_style" onMouseOver={hover} onMouseOut={out}>
          <img src="/assets/img/user_logo.png" />
          <div className="login">
            <NavDropdown.Item>create</NavDropdown.Item>
            <NavDropdown.Item>login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>sign-up</NavDropdown.Item>
          </div>
        </div>
      </Navbar>
    </>
  );
};
