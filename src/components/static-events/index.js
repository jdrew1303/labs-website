import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import calendarImage from '../../images/static-calendar.png';
import { StaticEvent } from './static-event';
import { StaticEventListItem } from './static-event-list-item';

export class StaticMeetupEvents extends React.Component {

    constructor()
    {
        super();

    this.testEvents = [
      new StaticEvent("Sean test", new Date(), "Test Location", "blahblahblahblabhlabhlabhlabhkaslkdfhaldiufa", "http://seankilleen.com", true, true, true,123)
    ]  
    }

  
  render(){
    return (
      <div>
        <Grid>
          <Row>
              <Col md={12}>
                <h1>Meet Ups and Events</h1>
              </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Image src={calendarImage} alt="static image of the June calendar" responsive />
            </Col>
            <Col md={8}>
                    { this.testEvents.map(event => 
                        <StaticEventListItem event={event} key={event.id} />
                    )}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}