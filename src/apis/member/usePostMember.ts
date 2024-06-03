import { axiosClient } from '@finnect/apis/AxiosClient';
import { IMemberProps } from '@finnect/interface/MemberInterface';

import { BASE_URI } from '@finnect/constants/URI';

export const postMember = async (
  nickname: string,
  role: string,
  phone: string
): Promise<IMemberProps> => {
  try {
    const response = await axiosClient.post(`${BASE_URI}/workspaces/members`, {
      nickname,
      role,
      phone,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
