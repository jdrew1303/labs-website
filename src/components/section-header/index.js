import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './theme.css';

export class SectionHeader extends React.Component {
  render() {
    return (
      <Grid style={{marginTop:'100px', marginBottom:'40px'}}>
        <Row>
          <Col sm={12} className="border">
            <Row>
              <Col sm={9}>
                <h1 className="section-title">{this.props.sectionTitle}</h1>
              </Col>
              {this.props.linkURL 
                ? <Col sm={3} style={{position: 'relative', height: '50px'}}>
                    <a className="section-link" href={this.props.linkURL}>{this.props.linkText ? this.props.linkText : this.props.linkURL}</a>
                  </Col>
                : null
              }
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}