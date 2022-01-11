import React, { Component } from 'react';

export default class Class_component extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }
  inputHandler = (text) => {
    this.setState({ title: text });
  };
  render() {
    return (
      <div>
        <h2>Opdracht 1</h2>
        <h1>Hello Class {this.state.title}</h1>
        <input
          onInput={(evt) => this.inputHandler(evt.target.value)}
          type="text"
        />
      </div>
    );
  }
}
