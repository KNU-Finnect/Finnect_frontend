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
    console.log(response.data.result);
    localStorage.setItem('refreshToken', refreshToken);
    return response.data;
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
}

// export async function logout(): Promise<AuthAPIRequest> {
//   try {
//     const response = await axios.post(`${BASE_URI}/users/logout`, {
//       withCredentials: true,
//     });
//     console.log(response.data.status);
//     localStorage.removeItem('accessToken');
//     return response.data;
//   } catch (error) {
//     console.error('Error during sign out:', error);
//     throw error;
//   }
// }

export const logout = () => {
  try {
    localStorage.removeItem('accessToken');
    console.log('Logout successful');
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
};
