import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image } from 'react-bootstrap';
import './TopNav.css';

import { items } from '../../databases';

import Dropdown from '../../components/Dropdown';
import SearchInput from '../../components/SearchInput';

const TopNav = ({ onSearchChange }) => {
  return(
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <div className="container">
          <Navbar.Brand href="#home">
            <Image
              src="https://cdn.viblo.asia/_nuxt/img/fbfe575.svg"
              className="align-top"
              id="topnav-logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link class="nav-link" role="button" to="/">Home</Link>
              <Link class="nav-link" role="button" to="/questions">Questions</Link>
            </Nav>
  
            <Nav className="d-flex flex-row">
              <SearchInput onSearchChange={ onSearchChange } />
              <Dropdown 
                title={
                  <Image 
                    src="https://images.viblo.asia/avatar/bc5ac429-ee66-425d-8d3b-caac03c579e5.jpg"
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
