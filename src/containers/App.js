import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/rootReducer'
import { Banner } from './banner/'
import { FeaturedProject } from '../components/featured-project/'
//import { MeetupEvents } from '../components/events/'
import WhatsBrewing from '../components/whats-brewing';
import { Footer } from '../components/footer';
import { StaticMeetupEvents } from '../components/static-events';
import { Divider } from '../components/divider';
import { SectionHeader } from '../components/section-header'

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
        <SectionHeader sectionTitle={"FEATURED EVENT"} />
        <FeaturedProject />
        <SectionHeader sectionTitle={"HERE’S WHAT’S HAPPENING"} />
        <StaticMeetupEvents />
        {/*<MeetupEvents events={this.props.events} setEvents={this.props.setEvents} />
        <Divider />*/}
        <SectionHeader sectionTitle={"HERE’S WHAT WE'RE TALKING ABOUT"} linkText="check out our other talks" linkURL="http://www.youtube.com" />
        <WhatsBrewing />
        <SectionHeader sectionTitle={"HERE’S WHAT WE'RE WRITING ABOUT"} linkText="check out our other blog posts" linkURL="http://www.excella.com/insights" />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
