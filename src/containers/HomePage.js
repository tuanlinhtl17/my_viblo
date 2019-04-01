import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';

import PostList from '../components/PostList';
import QuestionList from '../components/QuestionList';

class HomePage extends Component {
  render() {
    const { users, posts, questions } = this.props;

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <PostList users={ users } posts={ posts }/>
            </Col>
            <Col lg="3">
              <h3>Newest questions</h3>
              <hr/>
              <QuestionList users={ users } questions={ questions }/>    
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

HomePage.defaultProps = {
  users: [],
  posts: [],
  questions: []
}

HomePage.propTypes = {
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
};

export default HomePage;
