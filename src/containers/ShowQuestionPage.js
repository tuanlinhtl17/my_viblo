import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';

import ShowQuestion from '../components/ShowQuestion/ShowQuestion';
import PostList from '../components/PostList';

class ShowQuestionPage extends Component {
  render() {
    const { match, users, posts, questions } = this.props;
    const question = questions[match.params.id - 1]

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <ShowQuestion users={ users } question={ question }/>
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

ShowQuestionPage.defaultProps = { 
  users: [], 
  posts: [], 
  questions: [],
}

ShowQuestionPage.propTypes = { 
  users: PropTypes.array.isRequired, 
  posts: PropTypes.array.isRequired, 
  questions: PropTypes.array.isRequired,
}

export default ShowQuestionPage;
