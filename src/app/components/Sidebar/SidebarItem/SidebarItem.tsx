'use client';

import { FC } from 'react';
import styles from './SidebarItem.module.scss';
import { useRouter } from 'next/navigation';

export const SidebarItem: FC<{ item: any; onClick: (artistUri: string) => void }> = ({
  item,
  onClick,
}) => {
  const router = useRouter();
  return (
    <div
      className={styles.sidebarItem}
      onClick={() => {
        router.push(`/artist/${item.id}`);
      }}
    >
      <div
        className={styles.sidebarItem_coverContainer}
        onClick={(event) => {
          event.stopPropagation();
          onClick(item.uri);
        }}
      >
        <img
          src={item.images[2].url}
          alt=""
          className={styles.sidebarItem_cover}
        />
        <img
          src={'/play-button.svg'}
          alt=""
          className={styles.sidebarItem_play}
        />
      </div>

      <div className={styles.sidebarItem_play}></div>
      {item.name}
    </div>
  );
};
