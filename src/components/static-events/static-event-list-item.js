import React from 'react';
import './theme.css';

export class StaticEventListItem extends React.Component {

    static propTypes = {
        event: React.PropTypes.object
    };

    render () {
        const event = this.props.event;

        return (
            <div className='eventItem'>
                <div className="eventTitle">{event.title}</div>
                <div className="eventDetails"><em>{event.eventDateTime.toLocaleString()} &bull; {event.locationName} </em></div>
                <div className="eventSummary">{event.summary} ...<a href={event.link} target="_blank">More</a></div>
                { event.isExcellaSponsored &&
                    <span className='excellaEvent'>
                        <i className='fa fa-check' aria-hidden='true'></i>
                        Excella sponsored
                    </span>
                }
                { event.isExcellaHosted &&
                    <span className='excellaEvent'>
                        <i className='fa fa-check' aria-hidden='true'></i>
                        Excella hosted
                    </span>
                }

                {event.isExcellianSpeaking &&
                    <span className='excellaEvent'>
                        <i className='fa fa-check' aria-hidden='true'></i>
                        Excellian speaking
                    </span>
                }
            </div>
        );
    }
}