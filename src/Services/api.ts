import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meliuz-gama-server-rn.herokuapp.com/',
});

export default api;
