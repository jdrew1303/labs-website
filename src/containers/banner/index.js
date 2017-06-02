import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import { Navigation } from '../nav/'
import './theme.css'


export class Banner extends React.Component {

  render() {
    return(
      <header role="banner" className="banner">
        <Jumbotron>
          <Navigation />
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