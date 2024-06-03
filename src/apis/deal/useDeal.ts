import { BASE_URI } from '@finnect/constants/URI';
import { axiosClient } from '../AxiosClient';
import { AxiosResponse } from 'axios';

export async function createDeal(
  dealname: string,
  companyId: number
): Promise<AxiosResponse> {
  const url = `${BASE_URI}/workspaces/deals`;

  try {
    const response = await axiosClient.post(url, {
      dealname,
      companyId,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during create deal:', error);
    throw error;
  }
}

export async function getDealDetail(dealId: number): Promise<AxiosResponse> {
  const url = `${BASE_URI}/workspaces/deal/${dealId}/details`;

  try {
    const response = await axiosClient.get(url, {});
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during get deal detail:', error);
    throw error;
  }
}