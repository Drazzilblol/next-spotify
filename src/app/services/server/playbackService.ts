import { axiosInstance } from '@/app/axios';

type TPlayBody = { uris?: string[]; context_uri?: string; offset?: { position: number } };

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
    .put(`/me/player`, { device_ids: [deviceID] })
    .catch((error) => {
      throw error;
    })
    .then((response) => {
      return response?.data;
    });
};


