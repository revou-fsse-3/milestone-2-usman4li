import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '../../Components';

const WeatherApp: React.FC = () => {

  const [data, setData] = useState<any>({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=75d5132159c1a539c6a433e52d0094a1`
  const searchLocation = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      axios.get(url).then(
        (response) => {
          setData(response.data)
          console.log(response.data)
        }
      )
    }
  }

  return (
    <div className='app'>
      <div className="search">
        <Input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className='bold'>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p className='bold'>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind? <p className='bold'>{data.wind.speed} Km/h</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default WeatherApp;