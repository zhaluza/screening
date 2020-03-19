import React from 'react';

const LocationForm = (props) => {

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.query}
          onChange={props.handleChange}
          placeholder="Enter City"
        />
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default LocationForm;
