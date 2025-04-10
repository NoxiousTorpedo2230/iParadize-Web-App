import React from "react";
import { Container, Row, Col, Button, Card, ListGroup, Form } from "react-bootstrap";
import "./Home.css";
import iphoneImage from "../Assets/apple-black-logo.png";
import Register from "../User/Register";
import Login from "../User/Login";

function Home({
  showRegisterModal,
  handleShowRegisterModal,
  handleCloseRegisterModal,
  showLoginModal,
  handleShowLoginModal,
  handleCloseLoginModal,
  setIsLoggedIn,
  setCurrentUser,
}) {

  return (
    <>
      <main>
        {/* HOME STARTED */}
        <Container fluid className="homepage mt-5">
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={6} sm={12} className="text-center">
              <img src={iphoneImage} alt="iPhone for sale" className="img-fluid" />
            </Col>

            <Col lg={6} md={6} sm={12} className="text-center">
              <h1>iPhone Sale!</h1>
              <p>Get the latest iPhone at an unbeatable price. Limited time offer!</p>

              <Button variant="primary me-2" onClick={handleShowLoginModal}>
                Login
              </Button>

              <Button variant="success me-2" onClick={handleShowRegisterModal}>
                Register
              </Button>
            </Col>
          </Row>
        </Container>
        {/* HOME ENDED */}

        {/* Registration Modal */}
        <Register
          showModal={showRegisterModal}
          handleCloseModal={handleCloseRegisterModal}
          handleShowLoginModal={handleShowLoginModal}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentUser={setCurrentUser}
        />

        {/* Login Modal */}
        <Login
          showModal={showLoginModal}
          handleCloseModal={handleCloseLoginModal}
          handleShowRegisterModal={handleShowRegisterModal}
          setIsLoggedIn={setIsLoggedIn}
          setCurrentUser={setCurrentUser}
        />

        {/* ABOUT STARTED */}
        <Container fluid className="aboutpage mt-5">
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1>About iPhone</h1>
              <p>
                The iPhone is a line of smartphones designed and marketed by Apple Inc.
                These devices run Apple's iOS mobile operating system. The first-generation
                iPhone was released on June 29, 2007, and has since become one of the most
                popular smartphones in the world.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Card>
                <Card.Header>Key Features</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>High-resolution Retina display</ListGroup.Item>
                  <ListGroup.Item>Advanced camera system</ListGroup.Item>
                  <ListGroup.Item>Face ID and Touch ID for secure authentication</ListGroup.Item>
                  <ListGroup.Item>Long battery life and fast performance</ListGroup.Item>
                  <ListGroup.Item>Wide range of apps and services available on the App Store</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Card>
                <Card.Header>Global Franchises</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>New York, USA</ListGroup.Item>
                  <ListGroup.Item>London, UK</ListGroup.Item>
                  <ListGroup.Item>Tokyo, Japan</ListGroup.Item>
                  <ListGroup.Item>Sydney, Australia</ListGroup.Item>
                  <ListGroup.Item>Paris, France</ListGroup.Item>
                  <ListGroup.Item>Berlin, Germany</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* ABOUT ENDED */}

        {/* SERVICE STARTED */}
        <Container fluid className="servicepage mt-5">
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1>Our Services</h1>
              <p>
                We offer a range of services to ensure you get the most out of
                your iPhone experience. From technical support to personalized
                setup, we've got you covered.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Card>
                <Card.Header>Service List</Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>Technical Support</li>
                    <li>Personalized Setup</li>
                    <li>Software Updates</li>
                    <li>Device Repairs</li>
                    <li>Accessories and Add-ons</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* SERVICE ENDED */}

        {/* CONTACT STARTED */}
        <Container fluid className="contactpage mt-5">
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1>Contact Us</h1>
              <p>
                We'd love to hear from you! Please fill out the form below to get in touch.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        {/* CONTACT ENDED */}
      </main>
    </>
  );
}

export default Home;


  