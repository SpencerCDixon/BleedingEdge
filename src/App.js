import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

const style = {
  width: '60%',
  margin: '0 auto',
};

@connect(state => ({ routerState: state.router }))
class App extends Component {
  render() {
    return (
      <main style={style}>
        <LinkContainer to="/">
          <RaisedButton label="Home" primary={true} />
        </LinkContainer>

        <LinkContainer to="/todos">
          <RaisedButton label="Todos" primary={true} />
        </LinkContainer>

        {this.props.children}
      </main>
    );
  }
}

export default App;
