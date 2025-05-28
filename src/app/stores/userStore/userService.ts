import { axiosInstance } from '@/app/axios';
import { TUser } from '@/app/types/spotify';

export const getUser = async (): Promise<TUser> => {
  return axiosInstance
    .get(`/me`)
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};
