import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Post.css';
import { Row, Col, Image } from 'react-bootstrap';

const Post = ({ user, post }) => {
  const { title, id } = post;

  return (
    <div>
      <Row>
        <Col md="1">
          <Image 
            src={ user.avatar_url }
            alt="avatar"
            className="author-avatar"
          />
        </Col>
        <Col md="9">
          { user.name }
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

Post.defaultProps = {
  user: {},
  post: {},
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default Post;
