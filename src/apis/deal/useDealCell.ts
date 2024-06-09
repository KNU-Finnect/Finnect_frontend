import { axiosClient } from '../AxiosClient';

export const patchDealCell = async ({
  columnId,
  rowId,
  value,
}: {
  columnId: number;
  rowId: number;
  value: string;
}) => {
  try {
    const response = await axiosClient.patch(`/workspaces/dealcells`, {
      columnId,
      rowId,
      value,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchDealPeopleCell = async ({
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
    const response = await axiosClient.patch(`/workspaces/dealcells`, {
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

export const patchDealCompanyCell = async ({
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
    const response = await axiosClient.patch(`/workspaces/dealcells`, {
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
