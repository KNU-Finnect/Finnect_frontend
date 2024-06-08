// import { axiosClient } from '../AxiosClient';
import axios from 'axios';

import { ICVDetailDataProps } from '@finnect/interface/CompanyInterface';

export const GetCVDetailData = async (
  companyId: number
): Promise<ICVDetailDataProps> => {
  try {
    const response = await axios.get(`/api/workspaces/companies/${companyId}`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
