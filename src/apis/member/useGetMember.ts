import { axiosClient } from '@finnect/apis/AxiosClient';

import { IMemberProps } from '@finnect/interface/MemberInterface';

export const useGetMember = async (): Promise<IMemberProps> => {
  try {
    const response = await axiosClient.get(`/workspaces/members`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
