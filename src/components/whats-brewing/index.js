import React from 'react'
import { Button, Grid, Row, Col, Image } from 'react-bootstrap'
import computerImage from '../../images/computer-photo.jpeg'
import './theme.css'

const WhatsBrewingComponent = () => (
  <div id="whatsBrewing">
    <Grid>
        <Row>
            <Col md={12}>
                <h1>What's Brewing?</h1>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <Image src={computerImage} responsive alt="What's Brewing?" />
            </Col>
            <Col md={6}>
                <p>While you’re waiting for our website to come to life, feast on some of the work we’ve already done. Check out our blog to see what’s brewing!</p>
                <Button>Go to the Excella Blog</Button>
            </Col>
        </Row>
    </Grid>
  </div>
)

export default WhatsBrewingComponent