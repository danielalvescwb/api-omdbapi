import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: `http://www.omdbapi.com`,
  params: {
    apikey: '925eba28',
  },
});
