import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dogapi.dog/api/v2/',
});

// Add interceptors for handling global errors
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
