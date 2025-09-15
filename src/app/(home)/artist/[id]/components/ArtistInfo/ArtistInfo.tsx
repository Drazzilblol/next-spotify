import { FC } from 'react';
import styles from './ArtistInfo.module.scss';
import { TArtist } from '@/app/types/spotify';
import Image from 'next/image';

export const ArtistInfo: FC<{ artist: TArtist }> = ({ artist }) => {
  return (
    <div className={styles.artistInfo}>
      <Image
        src={artist.images[0].url}
        alt={artist.name}
        width={artist.images[0].width || 640}
        height={artist.images[0].height || 640}
        className={styles.artistInfo_cover}
      />
      <div className={styles.artistInfo_info}>
        <span className={styles.artistInfo_title}> {artist.name}</span>
        <span> Followers {artist.followers.total}</span>
      </div>
    </div>
  );
};
