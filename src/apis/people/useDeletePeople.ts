import { axiosClient } from '@finnect/apis/AxiosClient';

export const useDeletePeople = async () => {
  try {
    const response = await axiosClient.delete(`/workspaces/people`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
