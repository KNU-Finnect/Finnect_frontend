import { axiosClient } from '../AxiosClient';

export const postWCompany = async ({
  columnId,
  workspaceId,
  columnName,
  columnType,
  columnIndex,
  isHided,
  dtype,
}: {
  columnId: number;
  workspaceId: number;
  columnName: 'string';
  columnType: 'string';
  columnIndex: number;
  isHided: boolean;
  dtype: 'string';
}) => {
  try {
    const response = await axiosClient.post(`/workspaces/companies/columns`, {
      columnId,
      workspaceId,
      columnName,
      columnType,
      columnIndex,
      isHided,
      dtype,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
