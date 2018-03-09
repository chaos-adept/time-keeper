import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Meeting Timer based on the React</h1>
        </header>
        <p className="App-intro">
          it is just a sample of usage react 16.3 context api in the practice
        </p>
        <Timer>
        </Timer>
      </div>
    );
  }
}

export default App;
