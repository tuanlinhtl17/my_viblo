import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image } from 'react-bootstrap';
import './TopNav.css';

import { items } from '../../databases';

import Dropdown from '../../components/Dropdown';
import SearchInput from '../../components/SearchInput';

const TopNav = ({ onSearchChange, user }) => {
  return(
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <div className="container">
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              <Image
                src="https://cdn.viblo.asia/_nuxt/img/fbfe575.svg"
                className="align-top"
                id="topnav-logo"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" role="button" to="/">Home</Link>
              <Link className="nav-link" role="button" to="/questions">Questions</Link>
            </Nav>
  
            <Nav className="d-flex flex-row">
              <SearchInput onSearchChange={ onSearchChange } />
              <Dropdown 
                title={
                  <Image 
                    src={ user.avatar_url }
                    alt="avatar"
                    id="avatar"
                  />
                }
                items={items}
              />  
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default TopNav;
