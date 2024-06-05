import { axiosClient } from '@finnect/apis/AxiosClient';

import { IPeopleAxiosProps } from '@finnect/interface/PeopleInterface';

export const useGetPeople = async (): Promise<IPeopleAxiosProps> => {
  try {
    const response = await axiosClient.get(`/workspaces/peoples/all`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
