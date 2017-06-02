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
      // TODO: Real links
      new StaticEvent("Five Years of NoVA UX: A Look Back and a Look Ahead", new Date(2017,6,14,19,0,0), "Ellucian - Reston, VA", "Join us for a special celebration of ﬁve years of NoVA UX events. The NoVA UX team will be taking a look back at some of the best events since 2008", "http://SeanKilleen.com",false, false, false),
      new StaticEvent("DC Full Stack Web Summit", new Date(2017,6,23,9,0,0), "Arlington Tech eXchange - Arlington, VA", "Full day technical conference about web-scale best practices on Coding, Agile, DevOps and UI/UX with a theme of Legacy System Modernization", "http://SeanKilleen.com",true, true, true),
      new StaticEvent("The STEM + Art Forum", new Date(2017,6,28,17,0,0), "TBD", "The STEM+ Art Forum is an opportunity to harness cretive thinkers to discuss how Art and Tech can illuminate and deepen the value of technological", "http://SeanKilleen.com",true, true, true),
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