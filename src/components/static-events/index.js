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
      new StaticEvent("Five Years of NoVA UX: A Look Back and a Look Ahead", moment("2017-06-14T19:00:00-05:00").format("dddd, MMMM Do YYYY, h:mm a"), "Ellucian - Reston, VA", "Join us for a special celebration of ﬁve years of NoVA UX events. The NoVA UX team will be taking a look back at some of the best events since 2008", "https://www.meetup.com/nova-ux/events/239997158/",false, false, false,1),
      new StaticEvent("DC Full Stack Web Summit", moment("2017-06-23T09:00:00-05:00").format("dddd, MMMM Do YYYY, h:mm a"), "Arlington Tech eXchange - Arlington, VA", "Full day technical conference about web-scale best practices on Coding, Agile, DevOps and UI/UX with a theme of Legacy System Modernization", "https://www.eventbrite.com/e/dc-full-stack-web-summit-2017-tickets-33250082893?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing",true, true, true,2),
      new StaticEvent("The STEM + Art Forum", moment("2017-06-28T17:00:00-05:00").format("dddd, MMMM Do YYYY, h:mm a"), "TBD", "The STEM+ Art Forum is an opportunity to harness cretive thinkers to discuss how Art and Tech can illuminate and deepen the value of technological", "http://www.womenintechnology.org/index.php?option=com_jevents&task=icalrepeat.detail&evid=182&Itemid=136&year=2017&month=06&day=28&title=the-stem--art-forum&uid=68c5856f88e406b949785c88d33434e6",true, true, false,3),
    ]  
    }

  
  render(){
    return (
      <div id="meetups">
        <Grid>
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