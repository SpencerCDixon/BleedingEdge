import React, { findDOMNode, Component, PropTypes } from 'react';
import {RaisedButton} from 'material-ui';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> About </h1>
        <RaisedButton label="Click Here" primary={true} />
      </div>
    )
  }
}

export default About;
