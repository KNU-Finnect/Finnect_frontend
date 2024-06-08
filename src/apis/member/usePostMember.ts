import { axiosClient } from '@finnect/apis/AxiosClient';
import {
  IMemberProps,
  InviteMemeberProps,
  InviteProps,
} from '@finnect/interface/MemberInterface';

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

export const postAddMember = async (
  workspaceId: number
): Promise<InviteMemeberProps> => {
  try {
    const response = await axiosClient.post(`/workspaces/members`, {
      workspaceId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postInviteMember = async (
  emails: string[]
): Promise<InviteProps> => {
  try {
    const response = await axiosClient.post(`/workspaces/invitation`, {
      emails,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
