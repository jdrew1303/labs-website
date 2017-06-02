import React from 'react';
import { StaticEvent } from './static-event-list-item';

export class StaticEventListItem extends React.Component {

    static propTypes = {
        event: React.PropTypes.object
    };

    render () {
        const event = this.props.event;

        return (
            <div>
                <div className="eventTitle">{event.title}</div>
                <div className="eventDetails">EventDateTime &bull; {event.locationName} </div>
                <div className="eventSummary">{event.summary} ...<a href={event.link} target="_blank">More</a></div>
            </div>
        );
    }
}