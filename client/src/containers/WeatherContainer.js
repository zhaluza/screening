import React, { Component } from 'react';
import Weather from '../components/Weather.js';
import Today from '../components/Today.js';
import Error from '../components/Error.js';
import LocationForm from '../components/LocationForm.js';

class WeatherContainer extends Component {
  state = {
    weather: '',
    city: '',
    error: false,
    query: '',
  }

  componentDidMount() {
    // Fetch updated weather every 15 minutes
    this.interval = setInterval(() =>
      this.getWeather(this.state.weather), 900000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getWeather = (query) => {
    return fetch('/api/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    .then(response => response.json())
    .then(res => {
      //If invalid city, an empty object is returned
      if (Object.keys(res).length !== 0) {
        // Successful query handling
        this.setState({
          weather: res,
          city: res["name"],
          error: false,
          query: '',
       })} else {
         // Error query handling
         this.setState({
           weather: null,
           city: '',
           error: true,
           query: '',
         })
       }
     })
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getWeather(this.state.query)
    this.setState({
      query: '',
    })
  };

  render() {
    return(
      <div className="centered">
        <Today /><br/>
        <LocationForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} query={this.state.query}/>
        {this.state.error && <Error />}<br/>
        {this.state.weather && <Weather
          city={this.state.weather["name"]}
          temperature={this.state.weather["main"]["temp"]}
          description={this.state.weather["weather"][0]["description"]}
          humidity={this.state.weather["main"]["humidity"]}
          low={this.state.weather["main"]["temp_min"]}
          high={this.state.weather["main"]["temp_max"]}
          wind={this.state.weather["wind"]["speed"]} />}
      </div>
    )
  }
}

export default WeatherContainer;
