import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  },
});

export default Axios;
