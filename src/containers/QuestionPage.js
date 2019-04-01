import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';

import PostList from '../components/PostList';
import QuestionList from '../components/QuestionList';

class QuestionPage extends Component {
  render() {
    const { users, posts, questions } = this.props;

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <QuestionList users={ users } questions={ questions }/>    
            </Col>
            <Col lg="3">
              <h3>Newest posts</h3>
              <hr/>
              <PostList users={ users } posts={ posts }/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

QuestionPage.defaultProps = {
  users: [],
  posts: [],
  questions: []
}

QuestionPage.propTypes = {
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionPage;
