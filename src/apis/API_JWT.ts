import axios from 'axios';

import { BASE_URI } from '@finnect/constants/URI';

export const Instance = axios.create({
  baseURL: BASE_URI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: 'Bearer ' + accessToken,
  },
});
