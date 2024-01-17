import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from '../../Components';

interface WeatherAppProps {
  apiKey: string;
}

interface WeatherData {
  name?: string;
  main?: {
    temp?: number;
    feels_like?: number;
    humidity?: number;
  };
  weather?: [{ main: string }];
  wind?: {
    speed?: number;
  };
}

const WeatherApp: React.FC<WeatherAppProps> = ({ apiKey }) => {

  const [data, setData] = useState<WeatherData>({})
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };
  const fetchData = () => {
    setLoading(true);
    setError(null);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        setError('Error feching weather data. Please Enter Location');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

  };

  useEffect(() => {
    console.log('Fetching weather data...');
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Fetching weather data...', data);
  }, [data]);

  useEffect(() => {
    console.log('Hamburger component rendered');
  }, []);

  useEffect(() => {
    const event = new CustomEvent('weatherDataLoaded', { detail: data });
    window.dispatchEvent(event);
  }, [data]);
  return (
    <div className='app'>
      <div className="search">
        <Input 
          id='locationInput'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.name && (
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
      )}
    </div>
  );
};

export default WeatherApp;