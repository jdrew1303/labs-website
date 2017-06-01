import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/rootReducer'
import { Navigation } from './nav/'
import { Banner } from './banner/'
import { FeaturedProject } from '../components/featured-project/'
import { MeetupEvents } from '../components/events/'
import '../css/App.css'


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
        <FeaturedProject />
        <MeetupEvents events={this.props.events} setEvents={this.props.setEvents} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
