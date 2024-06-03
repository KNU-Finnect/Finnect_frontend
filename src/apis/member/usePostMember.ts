import { axiosClient } from '@finnect/apis/AxiosClient';
import { IMemberProps } from '@finnect/interface/MemberInterface';

export const postMember = async (
  nickname: string,
  role: string,
  phone: string
): Promise<IMemberProps> => {
  try {
    const response = await axiosClient.post(`/workspaces/members`, {
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
