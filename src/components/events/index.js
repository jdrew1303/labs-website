import React from 'react';
//import { ajaxPromise } from '../helpers';

export class MeetupEvents extends React.Component {

    componentDidMount(){
        //ajaxPromise('GET', 'http://meetup-on-rails.herokuapp.com/events.json')
        fetch('http://localhost:4000/events')
            .then( res => res.json() )
            .then( json => { this.props.setEvents(json) })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <p>Meetups go here</p>
            </div>
        );
    }
}