import React from 'react';

const Today = (props) => {
  //Format today
  let date = new Date();
  let today = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

  //Format weekday
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let weekday = daysOfWeek[(new Date(today)).getDay()]

  return(
    <div>
      <h1>{weekday} {today}</h1>
    </div>
  )
}

export default Today;
