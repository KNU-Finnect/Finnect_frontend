import { axiosClient } from '../AxiosClient';

export const UsePWcpCellsPsHook = async ({
  columnId,
  rowId,
  value,
  peopleId,
}: {
  columnId: number;
  rowId: number;
  value: string;
  peopleId: number;
}) => {
  try {
    const response = await axiosClient.patch(`/workspaces/cells`, {
      columnId,
      rowId,
      value,
      peopleId,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
