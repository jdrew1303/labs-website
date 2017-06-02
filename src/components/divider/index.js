import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './theme.css';

export class Divider extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12} id="border"></Col>
        </Row>
      </Grid>
    )
  }
}