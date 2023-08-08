import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MainContent = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>Welcome to Main Content</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
          </p>
          <p>
            Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          </p>
        </Col>
        <Col md={6}>
          <img src="https://picsum.photos/500/400" className="img-fluid" alt="Main Content" />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;