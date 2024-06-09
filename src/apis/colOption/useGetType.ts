import { axiosClient } from '@finnect/apis/AxiosClient';

interface IGetTypeProps {
  status: number;
  result: { type: string; filterConditions: string[] }[];
}

export const useGetType = async (): Promise<IGetTypeProps> => {
  try {
    const response = await axiosClient.get(`/types`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
