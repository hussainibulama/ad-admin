import axios from 'axios';
import https from 'https';

const instance = axios.create({
  baseURL: 'https://tapi.admoni.net',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default instance;
