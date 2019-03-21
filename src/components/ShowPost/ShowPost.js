import React from 'react';
import './ShowPost.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ShowPost = ({ post }) => {
  const { author, title, content } = post;

  return(
    <Container>
      <Row>
        <Col md="1">
          <Image 
            src="https://images.viblo.asia/avatar/bc5ac429-ee66-425d-8d3b-caac03c579e5.jpg"
            alt="avatar"
            className="author-avatar"
          />
        </Col>
        <Col md="9">
          { author }
          <br/>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <h1>{ title }</h1>
        </Col>
        <Col md="12">
          <p>{ content }</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ShowPost;
