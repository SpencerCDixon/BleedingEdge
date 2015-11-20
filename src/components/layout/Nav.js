import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { RaisedButton } from 'material-ui';

const styles = {
  navButton: {
    marginRight: '20px',
  }
}

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <LinkContainer to="/">
          <RaisedButton label="Home" primary={true} styles={{marginRight: '20px'}}/>
        </LinkContainer>

        <LinkContainer to="/todos">
          <RaisedButton label="Todos" primary={true} styles={{marginRight: '20px'}}/>
        </LinkContainer>
      </div>
    )
  }
}

export default Nav;
