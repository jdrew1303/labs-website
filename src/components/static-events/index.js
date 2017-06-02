import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import calendarImage from '../../images/static-calendar.png';

export class StaticMeetupEvents extends React.Component {
  render(){
    return (
      <div>
        <h1>Meet Ups and Events</h1>
        <Grid>
          <Row>
            <Col md={4}>
              <Image src={calendarImage} alt="static image of the June calendar" responsive />
            </Col>
            <Col md={8}>
              <h2>Col2</h2>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}