import React, { Component } from 'react';
// import logo from './images/logo.svg';
import logo from './images/excella-labs-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="excella-labs-logo" />
          <h2>Welcome to the future home of Excella Labs!</h2>
        </div>
        <p className="App-intro">
          Let's get started on Github Pages.
        </p>
      </div>
    );
  }
}

export default App;
