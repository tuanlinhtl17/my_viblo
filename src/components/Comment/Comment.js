import React from 'react';
import './Comment.css';
import { Row, Col, Image } from 'react-bootstrap';

const Comment = ({ comment }) => {
  const { author, content } = comment;

  return (
    <div>
      <Row>
        <Col md="1">
          <Image 
            src=""
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
        <p>{ content }</p>
      </Row>
      <hr/>
    </div>
  );
}

export default Comment;
