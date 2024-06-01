import axios from 'axios';

import { BASE_URI } from '@finnect/constants/URI';

export async function authApi(
  username: string,
  password: string
): Promise<void> {
  try {
    const response = await axios.post(
      `${BASE_URI}/users/signin?username=${username}&password=${password}`,
      { withCredentials: true }
    );
    const accessToken = response.headers.authorization;

    localStorage.setItem('accessToken', accessToken);
  } catch (error) {
    console.error('Error during sign in:', error);
  }
}
