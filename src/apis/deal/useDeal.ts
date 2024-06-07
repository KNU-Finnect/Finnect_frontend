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

export async function getDealList(page: number = 1): Promise<AxiosResponse> {
  const url = `${BASE_URI}/workspaces/deals/views/origin?page=${page}`;

  try {
    const response = await axiosClient.get(url, {});
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during get deal list:', error);
    throw error;
  }
}

export async function postDealCreate(
  dealName: string,
  companyId: number
): Promise<AxiosResponse> {
  const url = `${BASE_URI}/workspaces/deals`;

  try {
    const response = await axiosClient.post(url, {
      dealName,
      companyId,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during post deal create:', error);
    throw error;
  }
}

export const postDealColumnCreate = async ({
  columnName,
  columnType,
  columnIndex,
  isHide,
  dtype,
}: {
  columnName: string;
  columnType: string;
  columnIndex: number;
  isHide: boolean;
  dtype: string;
}) => {
  const url = `${BASE_URI}/workspaces/deals/columns`;

  try {
    const response = await axiosClient.post(url, {
      columnName,
      columnType,
      columnIndex,
      isHide,
      dtype,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during post deal column create:', error);
    throw error;
  }
};
