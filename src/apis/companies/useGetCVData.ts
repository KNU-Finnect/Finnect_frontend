import { axiosClient } from '@finnect/apis/AxiosClient';
// import axios from 'axios';

import { ICVDataProps } from '@finnect/interface/CompanyInterface';

export const useGetCVData = async (): Promise<ICVDataProps> => {
  try {
    const response = await axiosClient.get(
      `/workspaces/companies/views/origin?page=1`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
