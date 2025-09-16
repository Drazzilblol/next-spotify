'use client';

import styles from './SidebarItemSkeleton.module.scss';

export const SidebarItemSkeleton = () => {
  return (
    <div className={styles.skeletonItem}>
      <div className={styles.skeletonItem_circle} />
      <div className={styles.skeletonItem_text} />
    </div>
  );
};