import React from 'react';
import PropTypes from 'prop-types';
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

CommentForm.defaultProps = {
  dataID: '1'
}

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dataID: PropTypes.string.isRequired,
}

export default CommentForm;
