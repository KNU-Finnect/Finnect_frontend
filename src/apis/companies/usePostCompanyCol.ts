import { axiosClient } from '../AxiosClient';

export const postWCCol = async ({
  columnId,
  workspaceId,
  columnName,
  columnType,
  isHided,
}: {
  columnId: number;
  workspaceId: number;
  columnName: 'string';
  columnType: 'string';
  isHided: boolean;
}) => {
  try {
    const response = await axiosClient.post(`/workspaces/companies/columns`, {
      columnId,
      workspaceId,
      columnName,
      columnType,
      isHided,
      dtype: 'COMPANY',
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
