import axios from 'axios';

import API_KEY from '../secret';
import TYPES from './types';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},TW`;
  const request = axios.get(url);

  return {
    type: TYPES.FETCH_WEATHER,
    payload: request
  };
}
