import { FC } from 'react';
import styles from './ArtistContent.module.scss';
import { ArtistAlbums } from '@/app/(home)/artist/[id]/components/ArtistAlbums/ArtistAlbums';
import { getArtistAlbums, getArtistTopTracks } from '@/app/services/server/spotifyApi';
import { TAlbumsResponse, TArtist } from '@/app/types/spotify';
import { Tracks } from '../Tracks/Tracks';

export const ArtistContent: FC<{ artist: TArtist }> = async ({ artist }) => {
  const tracksReq: Promise<Spotify.Track[]> = getArtistTopTracks(artist.id);
  const albumsReq: Promise<TAlbumsResponse> = getArtistAlbums(artist.id);

  const [tracks, albums] = await Promise.all([tracksReq, albumsReq]);

  return (
    <div className={styles.artistContent}>
      <div className={styles.artistContent_tracksContainer}>
        <Tracks tracks={tracks} />
      </div>
      <ArtistAlbums albums={albums} />
    </div>
  );
};
