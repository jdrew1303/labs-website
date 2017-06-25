import React from 'react';
import { Grid, Row, Col, Badge, Panel } from 'react-bootstrap';
import { StaticPost } from './static-post';
import './theme.css';

export class StaticBlogPosts extends React.Component {

    constructor(props)
    {
        super(props)

    this.blogPosts = [
      new StaticPost(
        "Three Reasons Ionic Made Building a Mobile App Incredibly Simple", 
        "https://www.excella.com/insights/three-reasons-ionic-made-building-a-mobile-app-incredibly-simple", 
        "Kevin Groat", 
        "https://www.excella.com/insights/author/kgroat", 
        "Coding",
        1),
      new StaticPost(
        "Should my Organization Invest in Onboarding?", 
        "https://www.excella.com/insights/should-my-organization-invest-in-on-boarding", 
        "SARAH PARK", 
        "https://www.excella.com/insights/author/sarah-park", 
        "CHANGE MANAGEMENT",
        2),
      new StaticPost(
        "Q&A with UX Legend Jared Spool", 
        "https://www.excella.com/insights/qa-with-ux-legend-jared-spool", 
        "EXCELLA", 
        "https://www.excella.com/insights/author/excellian", 
        "UX / UI",
        3),
      new StaticPost(
        "Managing a Culture of Change", 
        "https://www.excella.com/insights/managing-a-culture-of-change", 
        "DAVID BOCK", 
        "https://www.excella.com/insights/author/david-bock", 
        "DEV OPS",
        4),    ]  
    }

  _StaticBlogPostItem = (post) => {
    return(
      <div className='blogItem'>
        <div style={{marginBottom:'60px'}}>
          <a href={post.link}><h2 className="blog-title">{post.title}</h2></a>
          <a href={post.authorLink}><h3 className="author">{post.author}</h3></a>
        </div>
        <Badge>{post.badgeText}</Badge>
      </div>
    )
  }

  render(){
    return (
      <div id="blog-posts">
        <Grid>
          <Row>
            { this.blogPosts.map(post => 
              <Col md={3} key={post.id}>
                <Panel>
                  {this._StaticBlogPostItem(post)}
                </Panel>
              </Col>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}