import React from 'react';
import './footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer" style={{margin:'50px 0 0 0'}}>
        <div className="container">
          <div className="column">
            <div>
              <label>Stay in touch:</label>
              <input type="text" placeholder="yourname@website.com" />
            </div>
            <div>
              <span> Like what you see here? </span>
            </div>
            <div>
              <span className="teal-text"> Check out our <a href="">opportunities</a>.</span>
            </div>
          </div>
          <div className="column link-block">
            <div>
              <a href="https://twitter.com/excellaco"><i className='fa fa-twitter' aria-hidden='true'></i></a>
              <a href="https://www.facebook.com/excellaconsulting/"><i className='fa fa-facebook' aria-hidden='true'></i></a>
              <a href="https://github.com/excellalabs"><i className='fa fa-github' aria-hidden='true'></i></a>
            </div>
            <div>
              <a href="https://www.excella.com" target="_blank">www.excella.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}