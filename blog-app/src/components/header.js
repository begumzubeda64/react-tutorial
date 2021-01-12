import React from 'react';
import logo from '../logo.svg'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
              {' '}
              React BlogPost
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/blog/zubu">My Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
