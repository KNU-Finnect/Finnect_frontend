import axios, { AxiosResponse } from 'axios';

import { BASE_URI } from '@finnect/constants/URL';
import { SignupRequest } from './signup.request';

export async function postSignup(data: SignupRequest): Promise<AxiosResponse> {
  const url = `${BASE_URI}/users/signup`;

  try {
    console.log('data:', data);
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
}
