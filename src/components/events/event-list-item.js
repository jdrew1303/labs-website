import React from 'react';

export class EventListItem extends React.Component {

    static propTypes = {
        event: React.PropTypes.object
    };

    render () {
        const event = this.props.event;

        return (
            <li>
                <a href={event.event_url} target="_blank" >{ event.event_name }</a><br />
                { event.group_name }
            </li>
        );
    }
}