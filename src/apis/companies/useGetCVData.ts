// import { axiosClient } from '../AxiosClient';
import axios from 'axios';

import { ICVDataProps } from '@finnect/interface/CompanyInterface';

export const useGetCVData = async (): Promise<ICVDataProps> => {
  try {
    const response = await axios.get(`/api/workspaces/views/company`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
