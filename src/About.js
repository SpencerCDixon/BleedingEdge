import React, { findDOMNode, Component, PropTypes } from 'react';
import {RaisedButton} from 'material-ui';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './actions/TodoActions';

@connect(state => ({ todos: state.Todos.todos }))
class About extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(TodoActions, this.props.dispatch);
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo() {
    const todo = 'This is a todo!';
    this.actions.addTodo(todo);
  }

  render() {
    return (
      <div>
        <h1> About </h1>
        <RaisedButton label="Click Here" primary={true} onClick={this.handleAddTodo} />
      </div>
    )
  }
}

export default About;
