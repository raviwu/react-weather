import axios from 'axios';

import { FETCH_WEATHER } from './types';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.OPEN_WEATHER_API_KEY}`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},TW`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
