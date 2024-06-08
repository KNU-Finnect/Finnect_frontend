import { BASE_URI } from '@finnect/constants/URI';
import { AxiosResponse } from 'axios';
import { axiosClient } from '../AxiosClient';

export async function getDealLog(dealId: number): Promise<AxiosResponse> {
  const url = `${BASE_URI}/workspaces/deals/${dealId}/logs`;
  try {
    const response = await axiosClient.get(url, {});
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during get deal log:', error);
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

export async function getDealNoteList(dealId: number): Promise<AxiosResponse> {
  const url = `${BASE_URI}/workspaces/deals/${dealId}/notes`;

  try {
    const response = await axiosClient.get(url, {});
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error during get deal note list:', error);
    throw error;
  }
}
export async function postDealNote(
  dealId: number,
  title: string,
  bodyText: string
): Promise<AxiosResponse> {
  const url = `${BASE_URI}/workspace/deals/${dealId}/notes`;

  const requestBody = {
    dealId,
    title,
    bodyText,
  };

  try {
    const response = await axiosClient.post(url, requestBody);
    return response;
  } catch (error) {
    console.error('Error during post deal note:', error);
    throw error;
  }
}
