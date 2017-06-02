import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/rootReducer'
import { Banner } from './banner/'
import { FeaturedProject } from '../components/featured-project/'
import { MeetupEvents } from '../components/events/'
import WhatsBrewing from '../components/whats-brewing';
import { Footer } from '../components/footer';



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
        <MeetupEvents events={this.props.events} setEvents={this.props.setEvents} />
        <WhatsBrewing />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
