import axios from 'axios';

export const healthCheckAxios = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
  },
});
