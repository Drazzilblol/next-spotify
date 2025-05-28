import { axiosInstance } from '@/app/axios';

export const getUser = async () => {
  return axiosInstance
    .get(`/me`)
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};
