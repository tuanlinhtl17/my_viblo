import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Post.css';
import { Row, Col } from 'react-bootstrap';

const Post = ({ author, title, url, numberAnswers }) => {
  return (
    <div>
      <Row>
        <Col md="9">
          { author }
          <br/>
          <a href={ url } className="post-title">
            { title }
          </a>
        </Col>
        <Col md="3">
          <FontAwesomeIcon icon="eye" aria-hidden="true"/>
          { numberAnswers }
        </Col>
      </Row>
      <hr/>
    </div>
  );
}

export default Post;
