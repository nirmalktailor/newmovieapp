import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Routes from './routes/Routes';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loginStatus : props.loginStatus
    }
  }
  
  render() {
    return (
      <Routes loginStatus = {this.state.loginStatus} />
    )
  }
}

export default App;