import { axiosClient } from '@finnect/apis/AxiosClient';
// import axios from 'axios';

import { ICVPDetailDataProps } from '@finnect/interface/CompanyInterface';

export const GetCVPDetailData = async (
  companyId: number
): Promise<ICVPDetailDataProps> => {
  try {
    const response = await axiosClient.get(
      `/workspaces/people?companyId=${companyId}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
