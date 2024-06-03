import { axiosClient } from '../AxiosClient';

export const useGetWCompany = async () => {
  try {
    const response = await axiosClient.get(`/workspaces/companies`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
