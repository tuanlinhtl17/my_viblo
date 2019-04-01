import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';

const Dropdown = ({title, id, className, items}) => {
  return(
    <NavDropdown 
      title={title}
      id={id}
      className={className}
    >
      {
        items.map(item => {
          return (
            <NavDropdown.Item key={item.id} href={item.href}>{item.name}</NavDropdown.Item>
          );
        })
      }
    </NavDropdown>
  );
}

Dropdown.defaultProps = {
  title: '', 
  id: '', 
  className: '', 
  items: []
}

Dropdown.propTypes = {
  title: PropTypes.string, 
  id: PropTypes.string, 
  className: PropTypes.string, 
  items: PropTypes.array  
}

export default Dropdown;
