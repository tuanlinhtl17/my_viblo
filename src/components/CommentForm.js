import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchInput = ({ onSubmit }) => {
  return(
    <Form>
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

export default SearchInput;
