'use client';

import { observer } from 'mobx-react-lite';
import { userStore } from '@/app/stores/userStore/userStore';
import { libraryStore } from '@/app/stores/libraryStore/libraryStore';
import { SidebarItem } from '@/app/components/Sidebar/SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';
import { startPlay } from '@/app/services/client/playbackService';
import {TArtist} from "@/app/types/spotify";

export const Sidebar = observer(() => {
  const lib = libraryStore.getLibrary;
  const deviceID = userStore.getDeviceID;

  return (
    <div className={styles.sidebar}>
      {lib
        ? lib?.items?.map((libItem: TArtist) => {
            return (
              <SidebarItem
                key={libItem.id}
                item={libItem}
                onClick={(artistUri) => {
                  if (deviceID) startPlay(deviceID, artistUri);
                }}
              />
            );
          })
        : null}
    </div>
  );
});
