import { axiosClient } from '@finnect/apis/AxiosClient';

export const deletePeople = async (personId: string) => {
  try {
    const response = await axiosClient.delete(`/workspaces/people/${personId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
