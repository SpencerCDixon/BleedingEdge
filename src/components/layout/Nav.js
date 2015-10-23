import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { RaisedButton } from 'material-ui';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <LinkContainer to="/">
          <RaisedButton label="Home" primary={true} />
        </LinkContainer>

        <LinkContainer to="/todos">
          <RaisedButton label="Todos" primary={true} />
        </LinkContainer>
      </div>
    )
  }
}

export default Nav;
