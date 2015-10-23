import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { RaisedButton, TextField } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';

@connect(state => ({ todos: state.Todo.todos }))
class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(TodoActions, this.props.dispatch);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: '',
    }
  }

  handleAddTodo() {
    this.actions.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <h1> Todos </h1>
        <TextField hintText="Hint Text" onChange={this.handleChange} />
        <RaisedButton label="Add Todo" primary={true} onClick={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoContainer;
