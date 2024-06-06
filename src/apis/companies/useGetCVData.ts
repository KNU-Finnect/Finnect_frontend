import { axiosClient } from '../AxiosClient';

import { ICVDataProps } from '@finnect/interface/CompanyInterface';

export const useGetCVData = async (): Promise<ICVDataProps> => {
  try {
    const response = await axiosClient.get(`/api/workspaces/views/company`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
