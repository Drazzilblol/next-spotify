'use client';
import { FC } from 'react';
import styles from './ArtistTracks.module.scss';
import { pausePlay, startPlay } from '@/app/services/client/playbackService';
import { Track } from '@/app/(home)/artist/[id]/components/Track/Track';
import { userStore } from '@/app/stores/userStore/userStore';
import { observer } from 'mobx-react-lite';

export const ArtistTracks: FC<{ tracks: Spotify.Track[] }> = observer(({ tracks }) => {
  const deviceID = userStore.getDeviceID;
  const playbackState = userStore.getPlayback;

  return (
    <div className={styles.artistTracks}>
      {(!tracks || tracks.length === 0) ? (
        <div>No top tracks available.</div>
      ) : (
        tracks.map((track, index) => {
        return (
          <Track
            playback={playbackState}
            key={track.id}
            trackNumber={index + 1}
            track={track}
            onClick={(start) => {
              if (deviceID) {
                if (start) {
                  startPlay(
                    deviceID,
                    tracks.map((t) => {
                      return t.uri;
                    }),
                    index,
                  );
                } else {
                  pausePlay(deviceID);
                }
              }
            }}
          />
        );
        })
      )}
    </div>
  );
});
