'use client';
import { FC } from 'react';
import styles from './ArtistAlbum.module.scss';

export const ArtistAlbum: FC<{ album: Spotify.Album }> = ({ album }) => {
  return (
    <div className={styles.album}>
      <img
        src={album.images[0].url}
        alt=""
      />
      <div
        className={styles.album_name}
        title={album.name}
      >
        {album.name}
      </div>
    </div>
  );
};
