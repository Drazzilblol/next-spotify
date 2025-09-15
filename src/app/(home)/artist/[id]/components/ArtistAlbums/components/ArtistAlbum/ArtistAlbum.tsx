'use client';
import { FC } from 'react';
import styles from './ArtistAlbum.module.scss';
import { userStore } from '@/app/stores/userStore/userStore';
import { observer } from 'mobx-react-lite';
import { startPlay } from '@/app/services/server/playbackService';
import { TAlbum } from '@/app/types/spotify';
import Image from 'next/image';

export const ArtistAlbum: FC<{ album: TAlbum }> = observer(({ album }) => {
  const deviceID = userStore.getDeviceID;

  const onPlayClick = () => {
    startPlay(deviceID, album.uri);
  };

  return (
    <div className={styles.album}>
      <div className={styles.album_image}>
        <Image
          src={album.images[0].url}
          alt={album.name}
          width={album.images[0].width || 300}
          height={album.images[0].height || 300}
        />
        <div
          className={styles.album_play}
          onClick={onPlayClick}
        >
          <Image
            src={'/play-button.svg'}
            alt="Play"
            width={24}
            height={24}
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
