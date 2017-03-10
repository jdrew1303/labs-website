import React from 'react'
import EventListItem from '../../components/events/event-list-item'

const event = { "event_name": "Understanding How Collaboration Increases Productivity", }

const setEvents = () => { return; }

it('should render event name as  correctly', () => {
    const tree = (
      <EventListItem event={event} />
    )
    expect(tree).toMatchSnapshot()
});