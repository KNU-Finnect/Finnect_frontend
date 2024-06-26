import { BASE_URI } from '@finnect/constants/URI';
import { axiosClient } from '../AxiosClient';
import axios from 'axios';

interface AuthAPIRequest {
  status: number;
  headers: any;
}

export async function refresh(): Promise<AuthAPIRequest> {
  try {
    const response = await axiosClient.post(`${BASE_URI}/users/reissue`, {
      withCredentials: true,
    });
    console.log(response);
    console.log('refresh successful');
    return response.data;
  } catch (error) {
    console.error('fail to refresh');
    throw error;
  }
}

export async function refreshWorkSpace(
  workspaceId: number
): Promise<AuthAPIRequest> {
  try {
    const response = await axiosClient.post(
      `${BASE_URI}/users/reissue-workspace`,
      { workspaceId },
      {
        withCredentials: true,
      }
    );
    console.log(response.data.status);
    const accessToken = response.headers.authorization;
    console.log(response.data.status);
    localStorage.setItem('accessToken', accessToken);
    console.log('refresh successful');
    return response;
  } catch (error) {
    console.error('fail to refresh');
    throw error;
  }
}

export async function refresh2(): Promise<AuthAPIRequest> {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post(
      `${BASE_URI}/users/reissue2`,
      { refreshToken },
      {
        withCredentials: true,
      }
    );
    console.log(response);
    console.log('refresh successful');
    return response.data;
  } catch (error) {
    console.error('fail to refresh');
    throw error;
  }
}
export async function refreshWorkSpace2(
  workspaceId: number
): Promise<AuthAPIRequest> {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post(
      `${BASE_URI}/users/reissue2-workspace`,
      {
        refreshToken,
        workspaceId,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response.data.status);
    const accessToken = response.headers.authorization;
    console.log(response.data.status);
    localStorage.setItem('accessToken', accessToken);
    console.log('refresh successful');
    return response;
  } catch (error) {
    console.error('fail to refresh');
    throw error;
  }
}
