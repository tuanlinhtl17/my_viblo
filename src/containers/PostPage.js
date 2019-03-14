import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import ShowPost from '../components/ShowPost';
import QuestionList from '../components/QuestionList';

class HomePage extends Component {
  render() {
    const { post, questions } = this.props;

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <ShowPost post={ post }/>
            </Col>
            <Col lg="3">
              <h3>Newest questions</h3>
              <hr/>
              <QuestionList questions={ questions }/>    
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
