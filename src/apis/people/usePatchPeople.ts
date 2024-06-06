import { axiosClient } from '@finnect/apis/AxiosClient';

export const patchPeople = async (
  personName: string,
  personRole: string,
  personEmail: string,
  companyId: number,
  personPhone: string
) => {
  try {
    const response = await axiosClient.patch(`/workspaces/people`, {
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
