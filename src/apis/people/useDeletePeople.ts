import { axiosClient } from '@finnect/apis/AxiosClient';

import { BASE_URI } from '@finnect/constants/URI';

export const useDeletePeople = async () => {
  try {
    const response = await axiosClient.delete(`${BASE_URI}/workspaces/people`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
