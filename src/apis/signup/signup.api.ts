import axios, { AxiosResponse } from 'axios';

import { SignupRequest } from './signup.request';

export async function postSignup(data: SignupRequest): Promise<AxiosResponse> {
  const url = `${import.meta.env.VITE_BASE_URL}/signup`;

  try {
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
