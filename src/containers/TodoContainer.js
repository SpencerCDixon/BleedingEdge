import React, { Component, PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';

const propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: '',
    }
  }

  handleAddTodo() {
    this.props.actions.addTodo(this.state.text);
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
