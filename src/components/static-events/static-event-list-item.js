import React from 'react';
import './theme.css';
import { Well } from 'react-bootstrap';


export class StaticEventListItem extends React.Component {

    static propTypes = {
        event: React.PropTypes.object
    };

    render () {
        const event = this.props.event;

        return (
            <Well className='eventItem'>
                <div className="eventTitle">{event.title}</div>
                <div className="eventDetails"><em>{event.eventDateTime.toLocaleString()} &bull; {event.locationName} </em></div>
                <div className="eventSummary">{event.summary}... <a href={event.link} target="_blank" className="eventMoreLink">More</a></div>
                { event.isExcellaSponsored &&
                    <span>
                        <span className='excellaEvent'>
                            <i className='fa fa-check' aria-hidden='true'></i>
                        </span>
                        <h2 className="excellaEventText">
                            Excella sponsored
                        </h2>
                    </span>
                }
                { event.isExcellaHosted &&
                    <span>
                        <span className='excellaEvent'>
                            <i className='fa fa-check' aria-hidden='true'></i>
                        </span>
                        <h2 className="excellaEventText">
                            Excella hosted
                        </h2>
                    </span>
                }

                {event.isExcellianSpeaking &&
                    <span>
                        <span className='excellaEvent'>
                            <i className='fa fa-check' aria-hidden='true'></i>
                        </span>
                        <h2 className="excellaEventText">
                            Excellian speaking
                        </h2>
                    </span>
                }
            </Well>
        );
    }
}