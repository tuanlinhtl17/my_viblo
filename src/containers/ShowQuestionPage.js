import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import ShowQuestion from '../components/ShowQuestion/ShowQuestion';
import PostList from '../components/PostList';

class PostPage extends Component {
  render() {
    const { match, posts, questions } = this.props;
    const question = questions[match.params.id - 1]

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <ShowQuestion question={ question }/>
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

export default PostPage;
