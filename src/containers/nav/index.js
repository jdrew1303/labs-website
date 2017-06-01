import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export class Navigation extends React.Component {
  render() {
    return ( 
      <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Excella Labs</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}