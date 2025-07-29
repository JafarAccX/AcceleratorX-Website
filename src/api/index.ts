import axios from 'axios';

// Create an Axios instance for API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // This is crucial for sending HttpOnly cookies
});

export { api };
