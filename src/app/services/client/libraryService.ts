import { axiosInstance } from '@/app/axios';
import { TArtists } from '@/app/types/spotify';

export const getArtists = async (): Promise<TArtists> => {
  return axiosInstance
    .get(`/me/following?type=artist&limit=50`)
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data.artists;
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


