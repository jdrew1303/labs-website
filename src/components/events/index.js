import React from 'react';
//import { ajaxPromise } from '../helpers';
import { EventListItem } from './event-list-item';

export class MeetupEvents extends React.Component {

    componentDidMount(){
        //ajaxPromise('GET', 'http://meetup-on-rails.herokuapp.com/events.json')
        //fetch('http://localhost:4000/events')

       fetch('http://meetup-on-rails.herokuapp.com/events.json')
            .then( res => res.json() )
            .then( json => { this.props.setEvents(json) })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>Upcoming Meetups</h2>
                <ul>
                    { this.props.events.map(event => 
                        <EventListItem event={event} />
                    )}
                </ul>
            </div>
        );
    }
}