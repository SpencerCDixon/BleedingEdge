import React, { Component } from 'react';
import { Button, Row, Col} from 'elemental';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <Row>
        <Col sm="1/4"/>
        <Col sm="2/4">
          <h1> This is an application </h1>
          <Button type="primary">Primary</Button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {this.props.children}
        </Col>
        <Col sm="1/4"/>
      </Row>
    );
  }
}

export default App;
