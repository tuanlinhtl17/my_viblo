import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import ShowPost from '../components/ShowPost/ShowPost';
import QuestionList from '../components/QuestionList';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class PostPage extends Component {
  render() {
    const { match, users, posts, questions, comments } = this.props;
    const post = posts[match.params.id - 1];
    const user = users[post.author_id];
    const list_comment = comments.filter(comment => {
      return comment.post_id === Number(match.params.id);
    });

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <ShowPost post={ post }/>
              <hr/>
              <h1>Comment:</h1>
              <CommentForm></CommentForm>
              <br/>
              <CommentList comments={ list_comment } /> 
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

export default PostPage;
