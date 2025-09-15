import { getArtist } from '@/app/stores/currentArtistStore/currentArtistService';
import { ArtistInfo } from '@/app/(home)/artist/[id]/components/ArtistInfo/ArtistInfo';
import styles from './page.module.scss';
import { FC } from 'react';
import { ArtistContent } from '@/app/(home)/artist/[id]/components/ArtistContent/ArtistContent';

const Artist: FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = await params;
  const artist = await getArtist(id);

  if (!artist) {
    return null;
  }

  return (
    <div className={styles.artist}>
      <ArtistInfo artist={artist} />
      <ArtistContent artist={artist} />
    </div>
  );
};

export default Artist;
