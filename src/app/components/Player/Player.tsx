'use client';

import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';
import { Controls } from '@/app/components/Player/Controls/Controls';
import styles from './Player.module.scss';

export const Player = () => {
  const { data: session } = useSession();
  const getOAuthToken = useCallback(
    (callback: any) => {
      const token = (session as any)?.token?.access_token;
      callback(token);
    },
    [session],
  );

  return (
    <div className={styles.player}>
      <WebPlaybackSDK
        initialDeviceName="Spotify Next"
        getOAuthToken={getOAuthToken}
        initialVolume={0.5}
        connectOnInitialized={true}
      >
        <Controls></Controls>
      </WebPlaybackSDK>
    </div>
  );
};
