import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/rootReducer'
import { Banner } from './banner/'
import { FeaturedProject } from '../components/featured-project/'
import { MeetupEvents } from '../components/events/'
import WhatsBrewing from '../components/whats-brewing';
import { Footer } from '../components/footer';
import { StaticMeetupEvents } from '../components/static-events';
import { Divider } from '../components/divider';

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
    return {
        setEvents: (json) => dispatch(actionCreators.setEvents(json))
    };
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <FeaturedProject />
        <Divider />
        <StaticMeetupEvents />
        <Divider />
        {/*<MeetupEvents events={this.props.events} setEvents={this.props.setEvents} />*/}
        <Divider />
        <WhatsBrewing />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
