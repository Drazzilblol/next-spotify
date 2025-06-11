'use client';
import { FC } from 'react';
import styles from './ArtistAlbum.module.scss';
import { userStore } from '@/app/stores/userStore/userStore';
import { observer } from 'mobx-react-lite';
import { startPlay } from '@/app/stores/currentArtistStore/currentArtistService';
import { TAlbum } from '@/app/types/spotify';

export const ArtistAlbum: FC<{ album: TAlbum }> = observer(({ album }) => {
  const deviceID = userStore.getDeviceID;

  const onPlayClick = () => {
    startPlay(deviceID, album.uri);
  };

  return (
    <div className={styles.album}>
      <div className={styles.album_image}>
        <img
          src={album.images[0].url}
          alt=""
        />
        <div
          className={styles.album_play}
          onClick={onPlayClick}
        >
          <img
            src={'/play-button.svg'}
            alt=""
          />
        </div>
      </div>

      <div
        className={styles.album_name}
        title={album.name}
      >
        {album.name}
      </div>
    </div>
  );
});
