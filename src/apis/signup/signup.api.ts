import axios, { AxiosResponse } from 'axios';

import { signupRequest } from './signup.request';

export async function Signup(data: signupRequest): Promise<AxiosResponse> {
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
