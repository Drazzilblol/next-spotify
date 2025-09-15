import { FC } from 'react';
import { getAlbum, getAlbumTracks } from '@/app/services/server/spotifyApi';
import styles from './page.module.scss';
import Image from 'next/image';
import { Tracks } from '@/app/(home)/artist/[id]/components/Tracks/Tracks';

const AlbumPage: FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = await params;

  const album = await getAlbum(id);
  const tracks = await getAlbumTracks(id);

  if (!album) return null;

  return (
    <div className={styles.album}>
      <div className={styles.album_header}>
        <Image
          src={album.images[0].url}
          alt={album.name}
          width={250}
          height={250}
          className={styles.album_cover}
        />
        <div className={styles.album_info}>
          <h1 className={styles.album_title}>{album.name}</h1>
          <div className={styles.album_meta}>{album.artists.map((a) => a.name).join(', ')}</div>
          <div className={styles.album_meta}>{album.release_date}</div>
        </div>
      </div>

      <div className={styles.album_tracks}>
        <div className={styles.album_tracksInner}>
          <Tracks tracks={tracks} />
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;


