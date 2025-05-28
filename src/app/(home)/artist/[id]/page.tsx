import {
  getArtist,
  getArtistTopTracks,
} from '@/app/stores/currentArtistStore/currentArtistService';
import { ArtistInfo } from '@/app/(home)/artist/[id]/componets/ArtistInfo/ArtistInfo';
import { ArtistTracks } from '@/app/(home)/artist/[id]/componets/ArtistTracks/ArtistTracks';
import styles from './page.module.scss';

const Artist = async ({ params }: any) => {
  const { id } = await params;
  const artist = await getArtist(id);
  const tracks: Spotify.Track[] = await getArtistTopTracks(artist.id);

  if (!artist) {
    return null;
  }

  return (
    <div className={styles.artist}>
      <ArtistInfo artist={artist} />
      <ArtistTracks tracks={tracks} />
    </div>
  );
};

export default Artist;
