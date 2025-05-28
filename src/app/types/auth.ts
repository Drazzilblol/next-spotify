import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';

export type TToken = JWT & {
  access_token?: string;
  accessTokenExpires?: number;
  refresh_token?: string;
  iat?: number;
  exp?: number;
  jti?: string;
  error?: string;
};

export type TSession = Session & {
  token: TToken;
};
