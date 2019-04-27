import React from 'react';

const WeatherInfo = (props) => {
    return(
      <div className="ui content">
        <h1>{props.day}</h1>
          <div className="ui blue segment">
              <i className={props.image}></i>
          </div>
        <h3>{props.temp}</h3>
      </div>
    );
}

export default WeatherInfo;
