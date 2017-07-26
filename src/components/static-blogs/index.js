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
        "Three Common Questions for TypeScript Beginners",
        "https://www.excella.com/insights/three-common-questions-for-typescript-beginners",
        "Cameron Ivey",
        "https://www.excella.com/insights/author/cameron-ivey",
        "JavaScript",
        1),
      new StaticPost(
        "Deep Learning: Its Power, Promise and the Future of Analytics",
        "https://www.excella.com/insights/deep-learning-its-power-promise-and-the-future-of-analytics",
        "Patrick Smith",
        "https://www.excella.com/insights/author/patrick-smith",
        "Data & Analytics",
        2),
      new StaticPost(
        "Six Ways to Get Started with DevOps",
        "https://www.excella.com/insights/six-ways-to-get-started-with-devops",
        "Jeff Gallimore",
        "https://www.excella.com/insights/author/jgallimore",
        "DevOps",
        3),
      new StaticPost(
        ".NET Standard: The Rosetta Stone for Developers",
        "https://www.excella.com/insights/net-standard-the-rosetta-stone-for-developers",
        "Patrick Leong",
        "https://www.excella.com/insights/author/patrick-leong",
        ".NET",
        4),    ]
    }

  _StaticBlogPostItem = (post) => {
    return(
      <div className='blogItem'>
        <div style={{marginBottom:'60px'}}>
          <a href={post.link} target="_blank"><h2 className="blog-title">{post.title}</h2></a>
          <a href={post.authorLink} target="_blank"><h3 className="author">{post.author}</h3></a>
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
              <Col sm={6} lg={3} key={post.id}>
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