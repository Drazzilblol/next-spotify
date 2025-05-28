'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import styles from './Header.module.scss';
import { useEffect } from 'react';
import { axiosInstance } from '@/app/axios';
import { userStore } from '@/app/stores/userStore/userStore';
import { TSession } from '@/app/types/auth';

export const Header = () => {
  const s = useSession();
  const session = s.data as TSession;

  useEffect(() => {
    if (session) {
      axiosInstance.defaults.headers.common['Authorization'] =
        `Bearer ${session?.token?.access_token}`;
      userStore.loadUser();
    }
  }, [session]);

  return (
    <div className={styles.header}>
      {session ? (
        <div className={styles.header_user}>
          <button onClick={() => signOut()}>Sign Out</button>
          <div>
            <Image
              src={
                'https://spotiy-playlist-retriever-experimental.vercel.app/_next/static/media/user_img.6db01878.svg'
              }
              width={50}
              height={50}
              alt="Defualt user image"
            />
          </div>
        </div>
      ) : (
        <div className={styles.header_user}>
          <button onClick={() => signIn()}>Sign In</button>
          <Image
            src={
              'https://spotiy-playlist-retriever-experimental.vercel.app/_next/static/media/sad_emoji.41405e6f.svg'
            }
            width={50}
            height={50}
            alt="sad emoji"
          />
        </div>
      )}
    </div>
  );
};
