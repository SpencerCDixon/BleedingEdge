import React, { Component } from 'react';
import { Button, Row, Col} from 'elemental';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const style = {
  width: '60%',
  margin: '0 auto',
};

class App extends Component {
  render() {
    return (
      <main style={style}>
        <Row>
          <LinkContainer to="/">
            <Button type="primary">Home</Button>
          </LinkContainer>

          <LinkContainer to="/about">
            <Button type="primary">About</Button>
          </LinkContainer>
          {this.props.children}
        </Row>
      </main>
    );
  }
}

export default App;
