import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/rootReducer'
import { Banner } from './banner/'
import { FeaturedProject } from '../components/featured-project/'
//import { MeetupEvents } from '../components/events/'
import About from '../components/about'
import Talks from '../components/talks'
import { Footer } from '../components/footer'
import { StaticMeetupEvents } from '../components/static-events'
import { SectionHeader } from '../components/section-header'
import { StaticBlogPosts } from '../components/static-blogs'

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
        <SectionHeader sectionTitle={"ABOUT"} />
        <About />
        <SectionHeader sectionTitle={"FEATURED EVENT"} />
        <FeaturedProject />
        {/* <SectionHeader sectionTitle={"HERE’S WHAT’S HAPPENING"} />
        <StaticMeetupEvents /> */}
        {/*<MeetupEvents events={this.props.events} setEvents={this.props.setEvents} />
        <Divider />*/}
        <SectionHeader sectionTitle={"HERE’S WHAT WE'RE TALKING ABOUT"} linkText="check out our other talks" linkURL="https://www.youtube.com/user/ExcellaConsulting" />
        <Talks />
        <SectionHeader sectionTitle={"HERE’S WHAT WE'RE WRITING ABOUT"} linkText="check out our other blog posts" linkURL="http://www.excella.com/insights" />
        <StaticBlogPosts />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
