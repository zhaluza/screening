import React from 'react';

const Weather = (props) => {
  let capitalizedDesc = props.description.charAt(0).toUpperCase() + props.description.slice(1);
  let temp = Math.round(props.temperature);
  let high = Math.round(props.high);
  let low = Math.round(props.low);

  return(
    <div>
      <h1>{props.city}</h1>
      <h2>{temp}°F</h2>
      <h3>{capitalizedDesc}</h3>
      <p>High: {high}°F</p>
      <p>Low: {low}°F</p>
      <p>Humidity: {props.humidity}%</p>
      <p>Wind Speed: {props.wind}mps</p>
    </div>
  )
}

export default Weather;
