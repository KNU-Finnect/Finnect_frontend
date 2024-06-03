import { axiosClient } from '../AxiosClient';

export const useGetWorkspace = async () => {
  try {
    const response = await axiosClient.get(`/workspaces`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
