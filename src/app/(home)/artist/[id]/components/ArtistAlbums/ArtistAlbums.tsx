'use client';
import { FC } from 'react';
import styles from './ArtistAlbums.module.scss';
import { ArtistAlbum } from './components/ArtistAlbum/ArtistAlbum';
import { TAlbumsResponse } from '@/app/types/spotify';

export const ArtistAlbums: FC<{ albums: TAlbumsResponse }> = ({ albums }) => {
  return (
    <div className={styles.artistAlbums}>
      {albums.items.length === 0 ? (
        <div>No albums found.</div>
      ) : (
        albums.items.map((album) => {
          return (
            <ArtistAlbum
              key={album.id}
              album={album}
            />
          );
        })
      )}
    </div>
  );
};
