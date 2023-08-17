import axios from 'axios';
axios.defaults.baseURL =
  'https://64ddcc43825d19d9bfb18716.mockapi.io/';
const Api = () => {
  const { data } = axios('/contacts');
  if (!data) return new Error('some');
  return data;
};

export default Api;
