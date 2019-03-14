import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import PostList from '../components/PostList';
import QuestionList from '../components/QuestionList';

class QuestionPage extends Component {
  render() {
    const { posts, questions } = this.props;

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <QuestionList questions={ questions }/>    
            </Col>
            <Col lg="3">
              <h3>Newest posts</h3>
              <hr/>
              <PostList posts={ posts }/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default QuestionPage;
