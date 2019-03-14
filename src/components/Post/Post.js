import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Post.css';
import { Row, Col, Image } from 'react-bootstrap';

const Post = ({ post }) => {
  const { author, title, url, score } = post;

  return (
    <div>
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
          <a href={ url } className="post-title">
            { title }
          </a>
        </Col>
        <Col md="2">
          <a href="/home">
            <FontAwesomeIcon size="2x" icon="caret-up" aria-hidden="true"/>
          </a>
          { score }
        </Col>
      </Row>
      <hr/>
    </div>
  );
}

export default Post;
