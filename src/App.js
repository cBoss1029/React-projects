import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';
class App extends Component {

    state = {
      value: '',
      list: [],

    }

handleChange=(e)=>{
  this.setState({value: e.target.value})
}
handleClear=()=>{
  this.setState({value: ''})
}
handleSubmit=()=>{
  const newList = this.state.list
  const item = this.state.value
  newList.push(item)
  this.setState({list: newList})
  this.setState({value: ''})


}
renderList(){

  return this.state.list.map((item, key) =>{
    return <ListItem handleDelete = {(index)=> this.handleDelete(index)} text= {item} index = {key}/>
  })
}
handleDelete=(index)=>{
  console.log(index);
  const newList = this.state.list
  newList.splice(index, 1)
  console.log(newList);
  this.setState({list: newList})
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type = 'text' value = {this.state.value} onChange = {this.handleChange}></input>
        <button onClick= {this.handleClear}>Clear</button>
        <button onClick = {this.handleSubmit}>Submit</button>
        <div>{this.renderList()}</div>

      </div>
    );
  }
}

export default App;
