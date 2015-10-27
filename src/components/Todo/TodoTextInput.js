import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

const propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
};

class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
    };
    this.handleBlur   = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlur() {
    console.log('blured')
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      this.props.addTodo(e.target.value);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <TextField
        ref='todoInput'
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

TodoTextInput.propTypes = propTypes;

export default TodoTextInput;
