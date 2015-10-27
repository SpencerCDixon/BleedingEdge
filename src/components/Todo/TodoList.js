import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui';

const propTypes = {
  todos: PropTypes.array.isRequired,
};

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.todos.map(todo => <ListItem key={todo.id} primaryText={todo.text} />)
    return (
      <List style={{width: '400'}}>
        {items}
      </List>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;
