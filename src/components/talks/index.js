import React from 'react'
import { Button, Grid, Row, Col, Badge } from 'react-bootstrap'
import './theme.css'

const Talks = () => (
  <div id="talks">
    <Grid>
        <Row>
            <Col md={5}>
                <h2>Angular vs React: An Out-of-the-Box Comparison</h2>
                <a href="https://www.excella.com/insights/author/doguhan-uluca">
                    <h3 className="speakerName">
                        DOGUHAN ULUCA
                    </h3>
                </a>
                <p>
                    With React gaining so much popularity, while Angular hit the reset button -- the question is on the minds of many developers: Angular vs React, which one is better? Hear Doguhan Uluca's CodeStock 2017 talk to understand the pros and cons of both frameworks and how they work, so you can make your own mind up.
                </p>
                <div>
                    <Badge>CODING</Badge>
                </div>
                <Button bsStyle="primary" href="https://www.youtube.com/watch?v=IQr5STWB_HM&feature=youtu.be" target='_blank'>watch it here <i className='fa fa-arrow-right' aria-hidden='true'></i></Button>
            </Col>
            <Col md={7}>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/IQr5STWB_HM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen style={{border: 0, padding: 0, margin: 0}}></iframe>
            </Col>
        </Row>
    </Grid>
  </div>
)

export default Talks