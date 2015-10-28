import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        key={this.props.id}
        primaryText={this.props.text}
      />
    )
  }
}

export default TodoItem
