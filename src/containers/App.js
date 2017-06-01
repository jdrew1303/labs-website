import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../redux/rootReducer';
import { Navigation } from './nav/index';
import { Banner } from './banner/index';
import { MeetupEvents } from '../components/events/index';
import WhatsBrewing from '../components/whats-brewing';
import '../css/App.css';


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
        <Navigation />
        <Banner />
        <MeetupEvents events={this.props.events} setEvents={this.props.setEvents} />
        <WhatsBrewing />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
