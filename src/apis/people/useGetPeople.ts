import { axiosClient } from '@finnect/apis/AxiosClient';

import { IPeopleAxiosProps } from '@finnect/interface/PeopleInterface';

import { BASE_URI } from '@finnect/constants/URI';

export const useGetPeople = async (): Promise<IPeopleAxiosProps> => {
  try {
    const response = await axiosClient.get(`${BASE_URI}/workspaces/people`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
