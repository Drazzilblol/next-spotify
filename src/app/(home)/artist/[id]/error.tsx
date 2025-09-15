'use client';
import ErrorComponent from '@/app/components/Error/Error';


export default function ArtistError({ error }: { error: Error & { digest?: string } }) {
  return <ErrorComponent message={error?.message} />;
}