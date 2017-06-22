import React from 'react'
import { Button, Grid, Row, Col, Image, Badge, Well } from 'react-bootstrap'
import dcfullstack from '../../images/dcfullstack_logo.png'
import './theme.css'

export class FeaturedProject extends React.Component {
  render() {
    return (
      <div id="featured">
        <Grid>
          <Row>
            <Col md={7}>
              <h2><a href="http://dcfullstack.com/" target="_blank">DC Full Stack Web Summit 2017</a></h2>
              <p><small><em>June 23rd, 2017 &#8226; Arlington Tech eXchange &#8226; Arlington, VA</em></small></p>
              <p>Full day technical conference about web-scale best practices as it relates to Legacy System Modernization</p>
              <Well>
                <h4>Fixing the Ultimate Legacy System: You</h4>
                <p>Andy Hunt, <em>author of The Pragmatic Programmer and the Agile Manifesto</em></p>
                <h4>Explain It!</h4>
                <p>Russ Olsen, <em>author Eloquent Ruby and Design Patterns in Ruby</em></p>
              </Well>
              <p className="badgeMargin">
                <Badge>Coding</Badge>
                <Badge>UX / UI</Badge>
                <Badge>Dev Ops</Badge>
                <Badge>Agile</Badge>
              </p>
              <Button bsStyle="primary" href="https://www.youtube.com/user/ExcellaConsulting" target='_blank'>Watch conference videos here <i className='fa fa-arrow-right' aria-hidden='true'></i></Button>
            </Col>
            <Col md={5}>
              <Image src={dcfullstack} alt="featured project" role="presentation" responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}