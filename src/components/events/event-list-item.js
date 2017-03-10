import React from 'react';

export class EventListItem extends React.Component {

    static propTypes = {
        event: React.PropTypes.object
    };

    render () {
        const event = this.props.event;

        return (
            <li>
                { event.event_name }
            </li>
        );
    }
}