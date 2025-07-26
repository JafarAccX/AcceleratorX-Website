import axios from 'axios';

// Create an Axios instance for API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://dev-api.acceleratorx.org',
});

// Set up axios interceptor to add the auth token to every request
api.interceptors.request.use(
  (config) => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      const { accessToken } = JSON.parse(storedData);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response, // Simply return the response if it's successful
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is a 401 and we haven't already tried to refresh the token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark that we've tried to refresh

      try {
        const storedData = localStorage.getItem("authData");
        if (!storedData) return Promise.reject(error);

        const { refreshToken } = JSON.parse(storedData);
        if (!refreshToken) return Promise.reject(error);

        // Request a new access token using the refresh token
        const { data } = await api.post('/auth/refresh-token', { refreshToken });

        // Update the stored auth data with the new tokens
        const newAuthData = {
          ...JSON.parse(storedData),
          accessToken: data.accessToken,
          refreshToken: data.refreshToken, // The backend might issue a new refresh token as well
        };
        localStorage.setItem('authData', JSON.stringify(newAuthData));

        // Update the authorization header for the original request and retry it
        api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        // If the refresh token is also invalid, log the user out
        // This would typically involve clearing localStorage and redirecting to the login page
        localStorage.removeItem("authData");
        window.location.href = '/sign-in'; // Force a redirect to the sign-in page
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export { api };
