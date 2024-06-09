import { axiosClient } from '../AxiosClient';

export const postWCCol = async ({
  columnName,
  columnType,
  isHided,
}: {
  columnName: string;
  columnType: string;
  isHided: boolean;
}) => {
  try {
    const response = await axiosClient.post(`/workspaces/companies/columns`, {
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
