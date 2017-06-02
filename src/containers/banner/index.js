import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import './theme.css';


export class Banner extends React.Component {

  render() {
    return(
      <header role="banner" className="banner">
        <Jumbotron>
          <div className="bannerContentWrap">
            <div className="bannerContent">
              <h1>Because amazing things come from experimentation.</h1>
            </div>
          </div>
        </Jumbotron>
      </header>
    )
  }
}