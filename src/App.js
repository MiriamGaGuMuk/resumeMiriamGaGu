import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from './Components/Resume/Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Resume/>
      </div>
    );
  }
}

export default App;
