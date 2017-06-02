import React from 'react';
import { StaticEvent } from './static-event-list-item';
import './theme.css';

export class StaticEventListItem extends React.Component {

    static propTypes = {
        event: React.PropTypes.object
    };

    render () {
        const event = this.props.event;

        return (
            <div>
                <div className="eventTitle">{event.title}</div>
                <div className="eventDetails"><em>{event.eventDateTime.toLocaleString()} &bull; {event.locationName} </em></div>
                <div className="eventSummary">{event.summary} ...<a href={event.link} target="_blank">More</a></div>
                { event.isExcellaSponsored &&
                    <span>Excella Sponsored</span>
                }
                { event.isExcellaHosted &&
                    <span>Excella Hosted</span>
                }

                {event.isExcellianSpeaking &&
                    <span>Excellian Speaking</span>
                }
            </div>
        );
    }
}