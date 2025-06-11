'use client';
import { FC } from 'react';
import styles from './ArtistAlbums.module.scss';
import { TAlbumsResponse } from '@/app/stores/currentArtistStore/currentArtistService';
import { ArtistAlbum } from './components/ArtistAlbum/ArtistAlbum';

export const ArtistAlbums: FC<{ albums: TAlbumsResponse }> = ({ albums }) => {
  return (
    <div className={styles.artistAlbums}>
      {albums.items.map((album) => {
        return (
          <ArtistAlbum
            key={album.name}
            album={album}
          />
        );
      })}
    </div>
  );
};
