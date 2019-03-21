import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Post.css';
import { Row, Col } from 'react-bootstrap';

const Question = ({ question }) => {
  const { id, author, title, numberSeen } = question;

  return (
    <div>
      <Row>
        <Col md="9">
          { author }
          <br/>
          <Link to={`/questions/${id}`} className="post-title">
            { title }
          </Link>
        </Col>
        <Col md="3">
          <FontAwesomeIcon icon="eye" aria-hidden="true"/>
          { numberSeen }
        </Col>
      </Row>
      <hr/>
    </div>
  );
}

export default Question;
