import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import computerImage from '../../images/computer-photo.jpeg'

const WhatsBrewingComponent = () => (
    <Grid>
        <Row>
            <Col md={8}>
                <h1>What's Brewing</h1>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <img src={computerImage} style={{width: '100%'}} />
            </Col>
            <Col md={4}>
                <p>While you’re waiting for our website to come to life, feast on some of the work we’ve already done. Check out our blog to see what’s brewing!</p>
                <Button>Go to the Excella Blog</Button>
            </Col>
        </Row>
    </Grid>
);

export default WhatsBrewingComponent;