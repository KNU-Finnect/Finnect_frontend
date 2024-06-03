import { axiosClient } from '../AxiosClient';

export const postWCompany = async ({
  domain,
  companyName,
}: {
  domain: string;
  companyName: string;
}) => {
  try {
    const response = await axiosClient.post(`/workspaces/companies`, {
      domain,
      companyName,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
