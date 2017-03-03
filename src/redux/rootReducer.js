// The types of actions that you can dispatch to modify the state of the store
export const types = {
    setEvents: 'SET_EVENTS'
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
    setEvents: (value) => { return { type: types.setEvents, value  }; }
}

// Initial state of the store
export const initialState = {
  events: []
}


//Create Reducer
export const reducer = (state = initialState, action) => {
    if(action.type == null) return state;
    switch(action.type) {
        case types.setEvents:
          return {...state, events: state.events.concat(action.value)};
          break;
        default:
          return state;
          break;
    }
}