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
              <h1>Let's Build Something Together</h1>
              <h2>Welcome to Excella Labs</h2>
            </div>
          </div>
        </Jumbotron>
      </header>
    )
  }
}