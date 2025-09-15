import {
  usePlaybackState,
  usePlayerDevice,
  useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk';
import { CurrentSong } from '@/app/components/Player/Controls/CurrentSong/CurrentSong';
import { useEffect } from 'react';
import { userStore } from '@/app/stores/userStore/userStore';
import styles from './Controls.module.scss';
import { setCurrentDevice } from '@/app/services/server/playbackService';

export const Controls = () => {
  const player = useSpotifyPlayer();

  const device = usePlayerDevice();

  const playbackState = usePlaybackState(true);

  useEffect(() => {
    if (device) setDevice();
  }, [device]);

  useEffect(() => {
    if (playbackState) userStore.setPlayback(playbackState);
  }, [playbackState]);

  const setDevice = () => {
    if (device === null) return;

    setCurrentDevice(device.device_id);
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
