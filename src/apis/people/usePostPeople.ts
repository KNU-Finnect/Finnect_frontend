import { axiosClient } from '@finnect/apis/AxiosClient';

export const postPeople = async (
  personName: string,
  personRole: string,
  personEmail: string,
  companyId: number,
  personPhone: string
) => {
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
