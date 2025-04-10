import React from "react";
import {  Navbar,  Container } from "react-bootstrap";
import {  FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";


function HeaderHome(){
    return (
      <Navbar expand="lg" className="header-navbar" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="" className="header-brand">
            <FaApple className="header-icon" />
            <span style={{ color: "whitesmoke", verticalAlign: "bottom", fontWeight: "bold"}}>
              iParadize
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-content" />
        </Container>
      </Navbar>
    );
};

export default HeaderHome;