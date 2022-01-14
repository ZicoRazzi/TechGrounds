import React, { Component } from 'react';

export default class Class_component_2 extends Component {
  render() {
    return (
      <div>
        <h1>Hello Class {this.props.title}</h1>
        <input
          value={this.props.title}
          onChange={(e) => this.props.setTitleHandler(e.target.value)}
        />
      </div>
    );
  }
}
