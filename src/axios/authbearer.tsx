import axios from 'axios';
import https from 'https';

const instances = axios.create({
  baseURL: 'https://tapi.admoni.net',
  timeout: 2000000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default instances;
