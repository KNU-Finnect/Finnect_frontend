import axios from 'axios';

export const useGetPeople = async () => {
  try {
    const response = await axios.get(`/workspaces/members`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
