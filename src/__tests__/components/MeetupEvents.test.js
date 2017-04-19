import React from 'react'
import MeetupEvents from '../../components/events/index'

const events = {
  "events": [
  {
    "id": 201,
    "meetup_group": "Agile-Leadership-Network-ALN-Washington-DC-Area-Chapter",
    "meetup_id": "237172801",
    "group_name": "Agile Leadership Network (ALN) Washington DC Area Chapter",
    "event_name": "Understanding How Collaboration Increases Productivity",
    "event_url": "https://www.meetup.com/Agile-Leadership-Network-ALN-Washington-DC-Area-Chapter/events/237172801/",
    "description": "<p><b>Abstract:</b></p> <p>All Agile and Lean approaches focus on collaboration: with customers, between team members, and with other stakeholders... But what does collaboration really mean? </p> <p>This workshop is centered around a simple simulation that has been used around the world to demonstrate how effective collaboration improves productivity. When teams voluntarily share the cognitive work, you can watch productivity soar! At the end, you will understand how to use a simple simulation to win a team's hearts and minds for real collaboration.</p> <p>We'll also explore some of the reasons behind this relationship discuss the importance of techniques such as teaming agreements that can help make work more collaborative.</p> <p><b>About the Speaker:</b></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/b/7/b/7/600_457787031.jpeg\" /></p> <p>Paul Boos serves as a IT Executive Coach with Excella Consulting where where he works with all levels of management as well as teams supporting their transformation to Agile and Lean software development approaches. He has been serving in this type of capacity since leaving the Federal Government workforce.  As a Fed, he served in a variety of management capacities introducing Agile and Lean approaches to improve delivery at the US Environmental Protection Agency and the US Department of Agriculture/Rural Development Service. Before that he managed and lead teams for various federal contractors and software product companies.  He has a passion for improving the lives of the organizational workforces while simultaneously improving their productivity.</p> <p><b>Cost: </b>Free thanks to our sponsors</p> <p><b>Sponsors:</b></p> <p><img src=\"http://photos1.meetupstatic.com/photos/event/8/9/8/3/600_458735203.jpeg\" /></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/6/6/e/c/600_458726348.jpeg\" /></p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/6/6/9/6/600_458726262.jpeg\" /></p> <p><b>Agenda:   </b></p> <p>6:30 to 7:00 PM - Dinner and Networking <br/>7:00 to 7:15 PM - Introduction <br/>7:15 to 8:15 PM - Presentation</p> <p><b>Can't make it this month?  </b><b><br/></b></p> <p>We meet monthly. So if you can't make it this month, hopefully we'll see you at the next meetup. Also, if you have an idea, game, workshop, or story to share with the group, then please contact the organizer to setup a presentation for a future meeting.</p>",
    "address_name": "AT&T Building",
    "address_1": "1900 Gallows Road",
    "address_2": null,
    "address_city": "Vienna",
    "address_zip": null,
    "address_state": "VA",
    "starts_at": "2017-03-02T18:30:00.000Z",
    "ends_at": "2017-03-02T18:30:00.000Z",
    "excella_hosted": true,
    "excella_sponsored": true,
    "event_at_atx": null,
    "speaker_id": null,
    "url": "http://meetup-on-rails.herokuapp.com/events/201.json"
  }
  ]
}

const setEvents = () => { return; }

it('renders meetups correctly', () => {
    const tree = (
      <MeetupEvents events={events} setEvents={setEvents()}/>
    )
    expect(tree).toMatchSnapshot()
});