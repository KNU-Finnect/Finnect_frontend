import axios from 'axios';

import { BASE_URI } from '@finnect/constants/URI';

interface AuthAPIRequest {
  status: number;
}
export async function authApi(
  username: string,
  password: string
): Promise<AuthAPIRequest> {
  try {
    const response = await axios.post(
      `${BASE_URI}/users/signin?username=${username}&password=${password}`,
      { withCredentials: true }
    );
    const accessToken = response.headers.authorization;
    console.log(response.data.status);
    localStorage.setItem('accessToken', accessToken);

    const refreshToken = response.data.refreshToken;
    console.log(response.data.refreshToken);
    localStorage.setItem('refreshToken', refreshToken);
    return response.data;
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
}
