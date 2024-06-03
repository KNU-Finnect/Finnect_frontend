import { axiosClient } from '@finnect/apis/AxiosClient';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

import { BASE_URI } from '@finnect/constants/URI';

export const patchPeople = async (
  personName: string,
  personRole: string,
  personEmail: string,
  personPhone: string
): Promise<IPeopleProps> => {
  try {
    const response = await axiosClient.patch(`${BASE_URI}/workspaces/people`, {
      personName,
      personRole,
      personEmail,
      personPhone,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
