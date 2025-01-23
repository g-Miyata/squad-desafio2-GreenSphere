import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3000',
//   timeout: 5000,
// });

const api = axios.create({
  baseURL: 'http://3.137.199.154:3000',
  timeout: 5000,
});

export default api;
