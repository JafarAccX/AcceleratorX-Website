import axios from 'axios';

// Create an Axios instance for API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL?.replace(/\/$/, ''),
  withCredentials: true,
});

export { api };
