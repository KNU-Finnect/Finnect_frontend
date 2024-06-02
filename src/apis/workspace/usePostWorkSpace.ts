import { axiosClient } from '../AxiosClient';

export const usePostWorkspace = async ({
  workspaceName,
}: {
  workspaceName: string;
}) => {
  try {
    const response = await axiosClient.post(`/workspaces`, { workspaceName });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
