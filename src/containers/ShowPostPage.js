import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

import ShowPost from '../components/ShowPost/ShowPost';
import QuestionList from '../components/QuestionList';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { requestComments, createComment } from '../actions/requestComments';

const mapStateToProps = state => {
  return {
    comments: state.requestComments.comments,
  };
}

const mapDispatchToProps = () => {
  return {
    onRequestComments: postID => requestComments(postID),
    onCreateComment: (event) => {
      event.preventDefault();
      createComment(event.target.getAttribute('data-id'), event.target.elements[0].value);
      event.target.elements[0].value = '';
    }
  }
}

class ShowPostPage extends Component {
  componentDidMount() {
    this.props.onRequestComments(this.props.match.params.id);
  }

  render() {
    const { match, users, posts, questions, comments, onDestroyPost, onCreateComment } = this.props;
    const post = posts.find(post => post.id == match.params.id);
    const user = users.find(user => user.id === post.user_id);

    return(
      <div>
        <Container className="main-page">
          <Row>
            <Col lg="9">
              <ShowPost post={ post } user={ user } onDestroyPost={ onDestroyPost }/>
              <hr/>
              <h1>Comment:</h1>
              <CommentForm onSubmit={ onCreateComment } dataID={ match.params.id }></CommentForm>
              <br/>
              <CommentList comments={ comments } users={ users } /> 
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowPostPage);
