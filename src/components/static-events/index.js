import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import calendarImage from '../../images/static-calendar.png';
import { StaticEvent } from './static-event';
import { StaticEventListItem } from './static-event-list-item';
import moment from 'moment';

export class StaticMeetupEvents extends React.Component {

    constructor(props)
    {
        super(props)

    this.testEvents = [
      new StaticEvent(
        "The STEM + Art Forum", 
        moment("2017-06-28T17:00:00-05:00").format("MMMM Do YYYY, h:mm a"), 
        "Arlington Tech eXchange - Arlington, VA", 
        "The STEM+ Art Forum is an opportunity to harness cretive thinkers to discuss how Art and Tech can illuminate and deepen the value", 
        "https://www.eventbrite.com/e/stem-art-forum-tickets-35492242252",
        true, 
        true, 
        true,
        1),
      new StaticEvent(
        "Getting a Dockerized ASP.NET Core Application Ready for Production", 
        moment("2017-07-18T19:00:00-06:30").format("MMMM Do YYYY, h:mm a"),
        "Microsoft - Friendship Heights, MD", 
        "The .NET DC User Group is dedicated to providing .NET enthusiasts that live and work in and around the District a place to gather, share", 
        "https://www.meetup.com/dotnetdc/",
        true, 
        true, 
        true,
        2),
      new StaticEvent(
        "Empathy as a Service", 
        moment("2017-07-19T09:00:00-06:30:00").format("MMMM Do YYYY, h:mm a"), 
        "Arlington Tech eXchange - Arlington, VA", 
        "This talk will begin with an overview of key statistics about mental wellness, followed by the efforts of the non-profit organization", 
        "https://www.meetup.com/TechTalkDC/events/240939380/",
        true, 
        true, 
        true,
        3),
    ]  
    }

  
  render(){
    return (
      <div id="meetups">
        <Grid>
          <Row>
            <Col md={4}>
              <Image src={calendarImage} alt="static image of the July calendar" responsive style={{marginTop: '4rem'}} />
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