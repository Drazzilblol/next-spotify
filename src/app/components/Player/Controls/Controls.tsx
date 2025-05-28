import {
  usePlaybackState,
  usePlayerDevice,
  useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk';
import { CurrentSong } from '@/app/components/Player/Controls/CurrentSong/CurrentSong';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { userStore } from '@/app/stores/userStore/userStore';
import styles from './Controls.module.scss';

export const Controls = () => {
  const { data: session } = useSession();

  const player = useSpotifyPlayer();

  const device = usePlayerDevice();

  const playbackState = usePlaybackState(true);

  useEffect(() => {
    if (device) setCurrentDevice();
  }, [device]);

  useEffect(() => {
    if (playbackState) userStore.setPlayback(playbackState);
  }, [playbackState]);

  const setCurrentDevice = () => {
    if (device === null) return;

    fetch(`https://api.spotify.com/v1/me/player`, {
      method: 'PUT',
      body: JSON.stringify({ device_ids: [device.device_id] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${(session as any)?.token?.access_token}`,
      },
    });
    userStore.setDeviceID(device.device_id);
  };

  if (device === null) return null;

  if (player === null) return null;

  return (
    <div className={styles.controls}>
      <CurrentSong></CurrentSong>
      <div className={styles.controls_buttons}>
        <button onClick={() => player?.previousTrack()}>{'<<'}</button>
        <button onClick={() => player.togglePlay()}>start/stop</button>
        <button onClick={() => player?.nextTrack()}>{'>>'}</button>
      </div>
    </div>
  );
};
