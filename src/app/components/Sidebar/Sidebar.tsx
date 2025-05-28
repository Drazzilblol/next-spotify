'use client';

import { observer } from 'mobx-react-lite';
import { userStore } from '@/app/stores/userStore/userStore';
import { libraryStore } from '@/app/stores/libraryStore/libraryStore';
import { SidebarItem } from '@/app/components/Sidebar/SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';
import { startPlay } from '@/app/stores/currentArtistStore/currentArtistService';
import axios from 'axios';

export const Sidebar = observer(() => {
  const lib = libraryStore.getLibrary;
  const deviceID = userStore.getDeviceID;

/*  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token:
          "BQBB-q10wKwlowMjU0DNDjMiEQxaa6J7P5quvRgqjz96jwt4euss_Feqr8xJlRCGB39mROiGeLdShCdHsLh6lVqIblrd_bGpNEVGUpaY2ZlxdZdaKDi9dKUARZyCr1X0ng2A4yDWIpk3RbnXxPU8f8AkkYEPno2TFQYHr_W3f8oUb20E9DncEZ43IIy6PVqHdyTbPQiDECgMk3JPK5R8vKoGh7PuCXr_5crN3fIFqhVZ6_i5GDFWa-4hwzaFmsaIJi9Hc38",
      client_id: '118632c06945405ab433104597719087',
    }),

    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });*/

  return (
    <div className={styles.sidebar}>
      {lib
        ? lib?.items?.map((libItem: any) => {
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
