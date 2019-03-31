import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CommentForm = ({ onSubmit, dataID }) => {
  return(
    <Form onSubmit={ onSubmit } data-id={ dataID }>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CommentForm;
