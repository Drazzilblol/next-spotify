import { getServerSession } from 'next-auth/next';
import axios from 'axios';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { axiosInstance } from '@/app/axios';
import { TSession } from '@/app/types/auth';

type TPlayBody = { uris?: string[]; context_uri?: string; offset?: { position: number } };

export type TAlbumsResponse = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Spotify.Album[];
};

export const getArtistTopTracks = async (id: string): Promise<Spotify.Track[]> => {
  const session = (await getServerSession(authOptions)) as TSession;
  return axios
    .get(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.token?.access_token}`,
      },
    })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data?.tracks;
    });
};

export const getArtistAlbums = async (id: string): Promise<TAlbumsResponse> => {
  const session = (await getServerSession(authOptions)) as TSession;
  return axios
    .get(`https://api.spotify.com/v1/artists/${id}/albums`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.token?.access_token}`,
      },
    })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};

export const startPlay = async (deviceID: string, tracks: string | string[], offset?: number) => {
  const body: TPlayBody = Array.isArray(tracks)
    ? {
        uris: tracks,
      }
    : {
        context_uri: tracks,
      };
  if (offset) {
    body.offset = {
      position: offset,
    };
  }

  return axiosInstance
    .put(`/me/player/play?device_id=${deviceID}`, body)
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};

export const pausePlay = async (deviceID: string) => {
  return axiosInstance
    .put(`/me/player/pause?device_id=${deviceID}`)
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};

export const setCurrentDevice = async (deviceID: string) => {
  return axiosInstance
    .put(`https://api.spotify.com/v1/me/player`, { device_ids: [deviceID] })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};

export const getArtist = async (artistID: string) => {
  const session = (await getServerSession(authOptions)) as TSession;
  return axios
    .get(`https://api.spotify.com/v1/artists/${artistID}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.token?.access_token}`,
      },
    })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};
