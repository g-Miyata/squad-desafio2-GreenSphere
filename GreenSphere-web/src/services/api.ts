import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3',
  timeout: 10000,
});

export default api;
