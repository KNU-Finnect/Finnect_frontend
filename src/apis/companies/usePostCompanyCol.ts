import { axiosClient } from '../AxiosClient';

export const postWCCol = async ({
  workspaceId,
  columnName,
  columnType,
  isHided,
}: {
  workspaceId: number;
  columnName: string;
  columnType: string;
  isHided: boolean;
}) => {
  try {
    const response = await axiosClient.post(`/workspaces/companies/columns`, {
      workspaceId,
      columnName,
      columnType,
      isHided,
      dType: 'COMPANY',
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
