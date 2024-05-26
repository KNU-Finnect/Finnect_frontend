import { Instance } from '@finnect/apis/API_JWT';

import { Instance } from '@finnect/apis/API_JWT';

export const useGetWorkspace = async () => {
  try {
    const response = await Instance.get(`/workspaces`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
