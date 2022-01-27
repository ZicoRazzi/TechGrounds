import React, { Component } from 'react';

export default class ToDoInput extends Component {
  state = {
    title: '',
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addToDoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form_container">
        <input
          type="text"
          className="input_text"
          placeholder="Add ToDo..."
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="submit_button">Submit</button>
      </form>
    );
  }
}
