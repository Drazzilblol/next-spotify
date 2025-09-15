import { FC } from 'react';
import styles from './Track.module.scss';
import moment from 'moment';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind(styles);

export const Track: FC<{
  track: Spotify.Track;
  trackNumber: number;
  onClick: (startPause: boolean) => void;
  playback?: Spotify.PlaybackState | null;
}> = ({ track, trackNumber, onClick, playback }) => {
  const isCurrent = track.id === playback?.track_window?.current_track?.id;
  return (
    <div
      className={cx(styles.track, {
        track__current: isCurrent && !playback?.paused,
      })}
    >
      {!playback?.paused && isCurrent ? (
        <Image
          src={'/pause-button.svg'}
          alt="Pause"
          width={24}
          height={24}
          className={styles.track_pauseButton}
          onClick={() => {
            onClick(false);
          }}
        />
      ) : (
        <>
          <Image
            src={'/play-button.svg'}
            alt="Play"
            width={24}
            height={24}
            className={styles.track_playButton}
            onClick={() => {
              onClick(true);
            }}
          />
          <div className={cx(styles.track_number)}>{trackNumber}</div>
        </>
      )}

      <div className={styles.track_name}>{track.name}</div>
      <div>{moment(track.duration_ms).format('mm:ss')}</div>
    </div>
  );
};
