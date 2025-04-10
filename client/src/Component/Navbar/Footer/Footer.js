import React from "react";
import "./Footer.css";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF,  faTwitter,  faInstagram,  faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <Container
      fluid
      className="footer py-5 mt-5 d-flex flex-column align-items-center"
    >
      <Row className="w-100 justify-content-center text-center">
        {/* About Section */}
        <Col md={4} className="mb-4">
          <h5 className="mb-3">About iParadize</h5>
          <p className="small">
            iParadize brings you the latest Apple products with exclusive
            discounts and premium shopping experiences. Your trusted companion
            for all things Apple. Experience the innovation!
          </p>
        </Col>

        {/* Quick Links */}
        <Col md={2} className="mb-4">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="list-unstyled small">
            <li>
              <a
                href="/about"
                className="text-decoration-none text-white hover-underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-decoration-none text-white hover-underline"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-decoration-none text-white hover-underline"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-decoration-none text-white hover-underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </Col>

        {/* Stay Connected */}
        <Col md={3} className="mb-4">
          <h5 className="mb-3">Stay Connected</h5>
          <p className="small">
            Subscribe to our newsletter for the latest updates and offers:
          </p>
          <Form>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="mb-2"
            />
            <Button variant="outline-light" className="w-100">
              Subscribe
            </Button>
          </Form>
        </Col>

        {/* Contact Information */}
        <Col md={3} className="mb-4">
          <h5 className="mb-3">Contact Us</h5>
          <p className="small">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            123 Apple Lane, Cupertino, CA
          </p>
          <p className="small">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            +1 (800) 123-4567
          </p>
          <p className="small">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            support@iparadize.com
          </p>
          <p>
            Follow us:
            <a href="https://facebook.com" className="text-white ms-3">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="text-white ms-3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" className="text-white ms-3">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" className="text-white ms-3">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </p>
        </Col>
      </Row>

      {/* Footer Bottom */}
      <Row className="pt-3 border-top border-light w-100 text-center">
        <Col>
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} iParadize. All rights reserved. |
            Crafted with ❤️ by iParadize Team.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;


