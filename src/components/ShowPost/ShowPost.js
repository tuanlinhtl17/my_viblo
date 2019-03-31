import React from 'react';
import './ShowPost.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ShowPost = ({ post, user, onDestroyPost }) => {
  const { title, content } = post;

  return(
    <Container>
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
          <Button onClick={ onDestroyPost } value={ post.id } >Delete post</Button>
          <br/>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <h1>{ title }</h1>
        </Col>
        <Col md="12">
          <p>{ content }</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ShowPost;
