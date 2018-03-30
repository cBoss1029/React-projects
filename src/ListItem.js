import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div className="App">
        <p onClick = {()=>this.props.handleDelete(this.props.index)}>{this.props.text}</p>
      </div>
    );
  }
}

export default ListItem;
