import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui';
import TodoItem from './TodoItem';

const propTypes = {
  todos: PropTypes.array.isRequired,
};

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.todos.map(function(todo){
      return <TodoItem {...todo} />
    });

    return (
      <List style={{width: '400'}}>
        {items}
      </List>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;
