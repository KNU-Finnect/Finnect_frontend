import { Instance } from '@finnect/apis/API_JWT';

export const usePostWorkspace = async ({
  workspaceName,
}: {
  workspaceName: string;
}) => {
  try {
    const response = await Instance.post(`/workspaces`, { workspaceName });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
