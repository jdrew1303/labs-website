import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './theme.css'

const About = () => {
  return (
  <Grid>
    <Row>
      <Col sm={12} className="about-labs">
        <h2>Welcome to ExcellaLabs by Excella Consulting</h2>
        <p>Labs is where we experiment with new ideas and technologies and tell the community about our experiences, as such things may not always work or look their best.</p>
        <p>If you’re looking for Excella’s Consulting and Training service head over to <a href="https://excella.com"><em>Excella.com</em></a></p>
      </Col>
    </Row>
  </Grid>
  )
}

export default About