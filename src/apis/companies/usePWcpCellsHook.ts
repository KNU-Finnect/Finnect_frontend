import { axiosClient } from '../AxiosClient';

export const UsePWcpCellsHook = async ({
  columnId,
  rowId,
  value,
  companyId,
}: {
  columnId: number;
  rowId: number;
  value: string;
  companyId: number;
}) => {
  try {
    const response = await axiosClient.patch(`/workspaces/cells`, {
      columnId,
      rowId,
      value,
      companyId,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
