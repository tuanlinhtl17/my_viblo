import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import { Row, Col, Image } from 'react-bootstrap';

const Comment = ({ comment, user }) => {
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
        </Col>
      </Row>
      <Row>
        <p>{ comment.content }</p>
      </Row>
      <hr/>
    </div>
  );
}

Comment.defaultProps = { 
  user: {},
  comment: {},
}

Comment.propTypes = { 
  user: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
}

export default Comment;
