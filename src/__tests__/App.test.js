import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../containers/App';
import { reducer } from '../redux/rootReducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(reducer);
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, div);
});
