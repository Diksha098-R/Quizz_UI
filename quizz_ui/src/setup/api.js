import axios from 'axios';
export const baseUrl = 'http://localhost:3001'
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    "Content-Type": "application/json",
  }
})

export default axiosInstance;