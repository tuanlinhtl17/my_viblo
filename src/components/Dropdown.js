import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const Dropdown = ({title = '', id = '', className = '', items = []}) => {
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

export default Dropdown;
