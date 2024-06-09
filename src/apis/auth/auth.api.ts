import axios from 'axios';

import { BASE_URI } from '@finnect/constants/URI';
import { axiosClient } from '../AxiosClient';

interface AuthAPIRequest {
  result: any;
  status: number;
  personalName: string;
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
    localStorage.clear();
    const accessToken = response.headers.authorization;
    console.log(response.data.status);
    localStorage.setItem('accessToken', accessToken);

    const refreshToken = response.data.result.refreshToken;
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
    localStorage.clear();
    console.log('sign out successfully');
    return response.data;
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
}

export async function logout2(): Promise<AuthAPIRequest> {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const response = await axiosClient.post(
      `${BASE_URI}/users/signout2`,
      { refreshToken },
      { withCredentials: true }
    );
    localStorage.clear();
    console.log('sign out successfully');
    return response.data;
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
}
