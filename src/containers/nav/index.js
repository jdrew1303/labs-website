import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './theme.css'

export class Navigation extends React.Component {

  render() {
    return ( 
      <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Excella Labs</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={() => window.location.hash='featured'} >Featured</NavItem>
          <NavItem eventKey={2} onClick={() => window.location.hash='meetups'}>Meetups</NavItem>
          <NavItem eventKey={3} onClick={() => window.location.hash='whatsBrewing'}>What's Brewing</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}