import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchInput = ({ onSearchChange }) => {
  return(
    <Form inline >
      <InputGroup className="mb-3">
        <FormControl onChange={ onSearchChange } type="text" placeholder="Search" />
        <InputGroup.Append>
          <Button className="input-group-text lime lighten-2">
            <FontAwesomeIcon icon="search" aria-hidden="true"/>      
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

SearchInput.propTypes = {
  onSearchChange: PropTypes.func
}

export default SearchInput;
