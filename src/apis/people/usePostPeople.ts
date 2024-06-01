import axios from 'axios';
import { IPeopleProps } from '@finnect/interface/PeopleInterface';

export const postPeople = async (
  nickname: string,
  role: string,
  phone: string
): Promise<IPeopleProps> => {
  try {
    const response = await axios.post(`/workspaces/members`, {
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
