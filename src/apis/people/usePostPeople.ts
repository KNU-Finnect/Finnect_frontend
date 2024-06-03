import { axiosClient } from '@finnect/apis/AxiosClient';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

export const postPeople = async (
  personName: string,
  personRole: string,
  personEmail: string,
  companyId: number,
  personPhone: string
): Promise<IPeopleProps> => {
  try {
    const response = await axiosClient.post(`/workspaces/people`, {
      personName,
      personRole,
      personEmail,
      companyId,
      personPhone,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
