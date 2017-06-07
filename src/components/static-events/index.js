import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import calendarImage from '../../images/static-calendar.png';
import { StaticEvent } from './static-event';
import { StaticEventListItem } from './static-event-list-item';
import moment from 'moment';

export class StaticMeetupEvents extends React.Component {

    constructor()
    {
        super();

    this.testEvents = [
      // TODO: Real links
        new StaticEvent("Five Years of NoVA UX: A Look Back and a Look Ahead", moment("2017-06-14T19:00:00-05:00").format("dddd, MMMM Do YYYY, h:mm a"), "Ellucian - Reston, VA", "Join us for a special celebration of ﬁve years of NoVA UX events. The NoVA UX team will be taking a look back at some of the best events since 2008", "http://SeanKilleen.com",false, false, false,1),
        new StaticEvent("DC Full Stack Web Summit", moment("2017-06-23T09:00:00-05:00").format("dddd, MMMM Do YYYY, h:mm a"), "Arlington Tech eXchange - Arlington, VA", "Full day technical conference about web-scale best practices on Coding, Agile, DevOps and UI/UX with a theme of Legacy System Modernization", "http://SeanKilleen.com",true, true, true,2),
        new StaticEvent("The STEM + Art Forum", moment("2017-06-28T17:00:00-05:00").format("dddd, MMMM Do YYYY, h:mm a"), "TBD", "The STEM+ Art Forum is an opportunity to harness cretive thinkers to discuss how Art and Tech can illuminate and deepen the value of technological", "http://SeanKilleen.com",true, true, false,3),
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