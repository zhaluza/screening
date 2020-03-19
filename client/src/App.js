import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './containers/WeatherContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App overlay">
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
