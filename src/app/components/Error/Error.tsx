'use client';

export const ErrorComponent = ({ message }: { message?: string }) => {
  return <div>Failed to load. {message}</div>;
};

export default ErrorComponent;


