'use client';

import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';
import { Controls } from '@/app/components/Player/Controls/Controls';
import styles from './Player.module.scss';
import { TSession } from '@/app/types/auth';

export const Player = () => {
  const s = useSession();
  const session = s.data as TSession;

  const getOAuthToken = useCallback(
    (callback: (token: string) => void) => {
      const token = session?.token?.access_token || '';
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
