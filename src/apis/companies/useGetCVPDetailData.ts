// import { axiosClient } from '../AxiosClient';
import axios from 'axios';

import { ICVPDetailDataProps } from '@finnect/interface/CompanyInterface';

export const GetCVPDetailData = async (
  companyId: number
): Promise<ICVPDetailDataProps> => {
  try {
    const response = await axios.get(
      `/api/workspaces/companies?companyId=${companyId}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
