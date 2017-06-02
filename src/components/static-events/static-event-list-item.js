import React from 'react';
import { StaticEvent } from './static-event-list-item';

export class StaticEventListItem extends React.Component {

    static propTypes = {
        event: React.PropTypes.object
    };

    render () {
        const event = this.props.event;

        return (
            <li>{event.title}</li>
        );
    }
}