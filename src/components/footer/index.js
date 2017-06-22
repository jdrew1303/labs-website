import React from 'react';
import '../../css/footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer" style={{margin:'50px 0 0 0'}}>
        <div className="container">
          <div className="column">
            <div>
              <label>Stay in touch:</label>
              <input type="text" />
            </div>
            <div>
              <p> Like what you see here? </p>
              <p> Check out our <a href="">opportunities</a>.</p>
            </div>
          </div>
          <div className="column">
            <div>
              <a href="https://twitter.com/excellaco"><i className='fa fa-twitter' aria-hidden='true'></i></a>
              <a href="https://www.facebook.com/excellaconsulting/"><i className='fa fa-facebook' aria-hidden='true'></i></a>
              <a href="https://github.com/excellalabs"><i className='fa fa-github' aria-hidden='true'></i></a>
              <p><a href="https://www.excella.com" target="_blank">www.excella.com</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}