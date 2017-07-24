import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './theme.css'

const About = () => {
  return (
  <Grid>
    <Row>
      <Col sm={12} className="about-labs">
        <h2>Welcome to Excella Labs by Excella Consulting</h2>
        <p>Excella Labs is a place for Excella’s technologists to share the new and experimental projects we're working on.</p>
        <p>Want to learn more about Excella’s service offerings, Agile training capabilities, or career opportunities? Visit <a href="https://excella.com"><em>excella.com</em></a>.</p>
      </Col>
    </Row>
  </Grid>
  )
}

export default About