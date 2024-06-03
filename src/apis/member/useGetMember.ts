import { axiosClient } from '@finnect/apis/AxiosClient';

import { IMemberProps } from '@finnect/interface/MemberInterface';

import { BASE_URI } from '@finnect/constants/URI';

export const useGetMember = async (): Promise<IMemberProps> => {
  try {
    const response = await axiosClient.get(`${BASE_URI}/workspaces/members`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
