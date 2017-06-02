import React from 'react'
import { Button, Grid, Row, Col, Image } from 'react-bootstrap'
import screen from '../../images/featured-project-screens.png'
import './theme.css'

export class FeaturedProject extends React.Component {
  render() {
    return (
      <div id="featured">
        <Grid>
          <Row>
            <h1>Featured Project</h1>
          </Row>  
        </Grid>  
        <Grid>
          <Row>
            <Col md={8}>
              <h2>Excella Retro</h2>
              <p>Excella Retro is an app that makes it convenient for a facilitator to hold retrospectives with team members, whether they are remote or present in the room. Retro is a real-time app that negates the need of an additional screen sharing software. Its sign-up free design allows for anonymous gathering of feedback from any team member with a smartphone, tablet or computer. All members can participate in a dot voting exercise to prioritize items that needs improvement and observe action items being created based on the team’s conversation.</p>
              <p>
                <strong>Stack:</strong> Angular 4, Firebase, TypeScript<br />
                <strong>Development team:</strong> Sam Blissard, Alex Hoffman, Cameron Ivey, Brendan Sawyer
              </p>
              <Button bsStyle="primary" href="https://retro.excella.com">Visit Project</Button>
            </Col>
            <Col md={4}>
              <Image src={screen} alt="featured project" role="presentation" responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}