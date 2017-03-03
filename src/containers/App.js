import React from 'react';
import { connect } from 'react-redux';
import logo from '../images/excella-labs-logo.png';
import '../css/App.css';

import { actionCreators } from '../redux/rootReducer';
import { MeetupEvents } from '../components/events/index';


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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="excella-labs-logo" />
          <h2>Welcome to the future home of Excella Labs!</h2>
        </div>
        <MeetupEvents events={this.props.events} setEvents={this.props.setEvents} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
