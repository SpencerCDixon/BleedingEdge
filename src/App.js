import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav } from './components/layout';

const style = {
  width: '60%',
  margin: '0 auto',
};

class App extends Component {
  render() {
    return (
      <main style={style}>
        <Nav />

        {this.props.children}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    routerStae: state.router,
  };
}

export default connect(mapStateToProps)(App);
