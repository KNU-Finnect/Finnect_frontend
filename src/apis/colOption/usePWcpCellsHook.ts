import { axiosClient } from '../AxiosClient';

export const UsePWcpCellsHook = async ({
  columnId,
  rowId,
  value,
}: {
  columnId: number;
  rowId: number;
  value: string;
}) => {
  try {
    const response = await axiosClient.patch(`/s`, {
      columnId,
      rowId,
      value,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
