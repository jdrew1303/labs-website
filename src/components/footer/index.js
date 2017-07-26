import React from 'react';
import './footer.css';
import jQuery from 'jquery';

export class Footer extends React.Component {
  componentDidMount() {
    window.jQuery = jQuery;
    const mc = document.createElement('script');
    mc.type = 'text/javascript';
    mc.async = true;
    mc.src =  '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    this.instance.appendChild(mc);

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `
              (function ($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[0] = 'EMAIL';
                ftypes[0] = 'email';
                fnames[1] = 'FNAME';
                ftypes[1] = 'text';
                fnames[2] = 'LNAME';
                ftypes[2] = 'text';
                fnames[3] = 'ORG';
                ftypes[3] = 'text';
              }(jQuery));
              var $mcj = jQuery.noConflict(true);`
    this.instance.appendChild(s);
  }
  render() {
    return (
      <div className="footer" style={{
        margin: '50px 0 0 0'
      }} ref={el => (this.instance = el)}>
        <div className="container">
          <div className="column">
            <div>
              <div id="mc_embed_signup">
                <form
                  action="//excella.us12.list-manage.com/subscribe/post?u=f532a60ec10561bcd92e0905e&amp;id=3714d81467"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate>
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">Stay in touch:
                      </label>
                      <input
                        type="email"

                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL" placeholder="yourname@website.com"/>
                    </div>
                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                      <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                    </div>
                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input
                        type="text"
                        name="b_f532a60ec10561bcd92e0905e_3714d81467"
                        tabIndex="-1"
                        value=""/>
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <h4>
                Like what you see here?
              </h4>
            </div>
            <div>
              <h3 className="teal-text">
                Check out our
                <a href="https://www.excella.com/careers" target="_blank" style={{marginLeft: 7}}>opportunities</a>
              </h3>
            </div>
          </div>
          <div className="column link-block">
            <div>
              <a href="https://twitter.com/excellaco" target="_blank">
                <i className='fa fa-twitter' aria-hidden='true'></i>
              </a>
              <a href="https://www.facebook.com/excellaconsulting/" target="_blank">
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </a>
              <a href="https://github.com/excellalabs" target="_blank">
                <i className='fa fa-github' aria-hidden='true'></i>
              </a>
            </div>
            <div>
              <a className="excellaLink" href="https://www.excella.com" target="_blank">www.excella.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}