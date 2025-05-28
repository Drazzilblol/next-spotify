import { axiosInstance } from '@/app/axios';

export const getArtists = async () => {
  return axiosInstance
    .get(`/me/following?type=artist&limit=50`)
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};

export const getPlaylists = async () => {
  return axiosInstance
    .get(`/me/playlists`)
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};
