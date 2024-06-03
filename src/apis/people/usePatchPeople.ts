import { axiosClient } from '@finnect/apis/AxiosClient';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

export const patchPeople = async (
  personName: string,
  personRole: string,
  personEmail: string,
  personPhone: string
): Promise<IPeopleProps> => {
  try {
    const response = await axiosClient.patch(`/workspaces/people`, {
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
