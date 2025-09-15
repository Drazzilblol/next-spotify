import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { TSession } from '@/app/types/auth';

export const withSessionHeaders = async () => {
  const session = (await getServerSession(authOptions)) as TSession;
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${session?.token?.access_token}`,
  } as const;
};


