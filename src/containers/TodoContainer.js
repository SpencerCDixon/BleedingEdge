import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import { TodoTextInput, TodoList } from '../components';

const propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

class TodoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Todo List </h1>
        <TodoTextInput 
          addTodo={this.props.actions.addTodo}
          placeholder={'Add todo'}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

TodoContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    todos: state.Todo.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
