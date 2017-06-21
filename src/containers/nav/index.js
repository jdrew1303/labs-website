import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './theme.css'

export class Navigation extends React.Component {

  render() {
    return ( 
      <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Excella<span>Labs</span></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={() => window.location.hash='featured'} >Featured</NavItem>
          <NavItem eventKey={2} onClick={() => window.location.hash='events'}>Events</NavItem>
          <NavItem eventKey={3} onClick={() => window.location.hash='talks'}>Talks</NavItem>
          <NavItem eventKey={4} onClick={() => window.location.hash='blog'}>Blog</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}