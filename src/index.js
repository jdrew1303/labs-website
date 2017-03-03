import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import { reducer } from './redux/rootReducer';
import './css/index.css';


const store = createStore(reducer);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('main') 
);
