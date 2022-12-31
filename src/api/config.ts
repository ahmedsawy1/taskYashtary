import axios from 'axios';
export const baseUrl = 'https://api-dev.yeshtery.com/v1/yeshtery/';

export const headers = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
  'x-requested-with': 'XMLHttpRequest',
  Accept: 'application/json',
};

export const axiosAPI = axios.create({
  baseURL: baseUrl,
  headers: headers,
});
