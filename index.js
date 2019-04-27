import React from 'react';
import ReactDOM from 'react-dom';
import DayCard from './Components/DayCard';
import WeatherInfo from './Components/WeatherInfo';

//current day of week
var today = new Date();
var weekDay = today.getDay();

//all days of week held as an array of objects in a single var
var weatherDataByDay = [
  {
    day: "Sunday",
    image: "huge snowflake outline icon",
    temp: "34/35 degrees"
  },
  {
    day: "Monday",
    image: "huge snowflake outline icon",
    temp: "35/34 degrees"
  },
  {
    day: "Tuesday",
    image: "huge cloud icon",
    temp: "47/34 degrees"
  },
  {
    day: "Wednesday",
    image: "huge sun outline icon",
    temp: "49/40 degrees"
  },
  {
    day: "Thursday",
    image: "huge sun outline icon",
    temp: "55/40 degrees"
  },
  {
    day: "Friday",
    image: "huge sun outline icon",
    temp: "55/40 degrees"
  },
  {
    day: "Saturday",
    image: "huge rain icon",
    temp: "58/39 degrees"
  }
];

//this function continuously shifts next day in array
function reOrderWeekdays(weekDays, newFirstDay){
  for (var i = 0; i < newFirstDay; i++) {
    var elem = weekDays.shift();
    weekDays.push(elem);
  }
  return weekDays;
}


class App extends React.Component{
  render(){
    var weatherDataCards = weatherDataByDay.map((weatherData) => {
      return (
          <DayCard>
            <WeatherInfo
              day={weatherData.day}
              image={weatherData.image}
              temp={weatherData.temp}
            />
          </DayCard>
        )
    });
    //above maps through date objects and returns the JSX
    //below takes date from browser and passes it through our function
    weatherDataCards = reOrderWeekdays(weatherDataCards, weekDay);
    return (
      <div className="ui compact basic segment">
        <div className="ui horizontal segments">
          {weatherDataCards}
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('#root'));
