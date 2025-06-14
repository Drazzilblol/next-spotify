import { FC } from 'react';
import styles from './ArtistInfo.module.scss';
import { TArtist } from '@/app/types/spotify';

export const ArtistInfo: FC<{ artist: TArtist }> = ({ artist }) => {
  return (
    <div className={styles.artistInfo}>
      <img
        src={artist.images[0].url}
        alt=""
        className={styles.artistInfo_cover}
      />
      <div className={styles.artistInfo_info}>
        <span className={styles.artistInfo_title}> {artist.name}</span>
        <span> Followers {artist.followers.total}</span>
      </div>
    </div>
  );
};
