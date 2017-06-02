import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class StaticMeetupEvents extends React.Component {
  render(){
    return (
      <div>
        <h1>Meet Ups and Events</h1>
        <Grid>
          <Row>
            <Col md={4}>
              <h2>Col1</h2>
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