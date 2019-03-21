import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import { Row, Col, Image } from 'react-bootstrap';

const Post = ({ post }) => {
  const { author, title, id } = post;

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
          <Link to={`/posts/${id}`} className="post-title">
            { title }
          </Link>
        </Col>
      </Row>
      <hr/>
    </div>
  );
}

export default Post;
