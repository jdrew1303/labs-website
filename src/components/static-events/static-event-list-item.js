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
                <h4 className="eventTitle"><a href={event.link} target="_blank" className="eventTitle">{event.title}</a></h4>
                <div className="eventDetails"><em>{event.eventDateTime.toLocaleString()} &bull; {event.locationName} </em></div>
                <div className="eventSummary">{event.summary}... <a href={event.link} target="_blank" className="eventMoreLink">More</a></div>
                <div className='eventTags'>
                { event.isExcellaSponsored &&
                    <div className='excellaEvent'>
                        <i className='fa fa-check' aria-hidden='true'></i>
                        <h2 className="excellaEventText">
                            Excella sponsored
                        </h2>
                    </div>
                }
                { event.isExcellaHosted &&
                        <div className='excellaEvent'>
                            <i className='fa fa-check' aria-hidden='true'></i>
                            <h2 className="excellaEventText">
                            Excella hosted
                        </h2>
                        </div>
                        
                }

                {event.isExcellianSpeaking &&
                        <div className='excellaEvent'>
                            <i className='fa fa-check' aria-hidden='true'></i>
                            <h2 className="excellaEventText">
                            Excellian speaking
                        </h2>
                        </div>
                        
                }
                </div>
            </Well>
        );
    }
}