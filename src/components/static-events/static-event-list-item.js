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
                <div>{event.title}</div>
                <div>EventDateTime &bull; {event.locationName} </div>
                <div>{event.summary} ...<a href={event.link} target="_blank">More</a></div>
            </div>
        );
    }
}