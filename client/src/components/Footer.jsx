// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Important Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/privacy" className="text-light">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:contact@example.com" className="text-light">
                  Email Us
                </a>
              </li>
              <li>AgriConnect</li>
              <li>Jalandhar, Punjab, 144001</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} AgriConnect. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
