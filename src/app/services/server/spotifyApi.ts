import { axiosInstance } from '@/app/axios';
import { TAlbumsResponse } from '@/app/types/spotify';
import { withSessionHeaders } from './sessionHeaders';

export const getArtistTopTracks = async (
  id: string,
  market: string = 'US',
): Promise<Spotify.Track[]> => {
  const headers = await withSessionHeaders();
  return axiosInstance
    .get(`/artists/${id}/top-tracks?market=${market}`, { headers })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data?.tracks;
    });
};

export const getArtistAlbums = async (id: string): Promise<TAlbumsResponse> => {
  const headers = await withSessionHeaders();
  return axiosInstance
    .get(`/artists/${id}/albums`, { headers })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};

export const getArtist = async (artistID: string) => {
  const headers = await withSessionHeaders();
  return axiosInstance
    .get(`/artists/${artistID}`, { headers })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};


