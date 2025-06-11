import { FC } from 'react';
import styles from './ArtistContent.module.scss';
import { ArtistTracks } from '@/app/(home)/artist/[id]/componets/ArtistTracks/ArtistTracks';
import { ArtistAlbums } from '@/app/(home)/artist/[id]/componets/ArtistAlbums/ArtistAlbums';
import {
  getArtistAlbums,
  getArtistTopTracks,
  TAlbumsResponse,
} from '@/app/stores/currentArtistStore/currentArtistService';

export const ArtistContent: FC<{ artist: any }> = async ({ artist }) => {
  const tracksReq: Promise<Spotify.Track[]> = getArtistTopTracks(artist.id);
  const albumsReq: Promise<TAlbumsResponse> = getArtistAlbums(artist.id);

  const [tracks, albums] = await Promise.all([tracksReq, albumsReq]);

  return (
    <div className={styles.artistContent}>
      <ArtistTracks tracks={tracks} />
      <ArtistAlbums albums={albums} />
    </div>
  );
};
