import { FC } from 'react';
import styles from './Track.module.scss';
import moment from 'moment';
import classNames from 'classnames/bind';

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
        <img
          src={'/pause-button.svg'}
          alt=""
          className={styles.track_pauseButton}
          onClick={() => {
            onClick(false);
          }}
        />
      ) : (
        <>
          <img
            src={'/play-button.svg'}
            alt=""
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
