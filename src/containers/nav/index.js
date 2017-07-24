import React from 'react'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
import './theme.css'
import excellalabs from '../../images/excellalabs_logo.png'

export class Navigation extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <Image src={excellalabs} alt="Excella Labs" role="presentation" responsive />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={() => window.location.hash='featured'} >Featured</NavItem>
          {/* <NavItem eventKey={2} onClick={() => window.location.hash='events'}>Events</NavItem> */}
          <NavItem eventKey={3} onClick={() => window.location.hash='talks'}>Talks</NavItem>
          <NavItem eventKey={4} onClick={() => window.location.hash='blog-posts'}>Blog</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}