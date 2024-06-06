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

    const refreshToken = response.data.result;
    localStorage.setItem('refreshToken', refreshToken);
    return response.data;
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
}

export async function logout(): Promise<AuthAPIRequest> {
  try {
    const response = await axios.post(`${BASE_URI}/users/signout`, {
      withCredentials: true,
    });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    console.log('sign out successfully');
    return response.data;
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
}
