import React from 'react';
import '../../css/footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <p><a href="https://twitter.com/excellaco" target="_blank">@excellaco</a></p>
          <p><a href="https://www.excella.com" target="_blank">www.excella.com</a></p>
        </div>
      </div>
    )
  }
}