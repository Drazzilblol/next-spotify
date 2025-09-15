import NextAuth from 'next-auth/next';
import { type NextAuthOptions } from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { TSession, TToken } from '@/app/types/auth';

async function refreshAccessToken(token: TToken) {
  try {
    const url = 'https://accounts.spotify.com/api/token';

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

        Authorization:
          'Basic ' +
          Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
          ).toString('base64'),
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token || '',
        client_id: process.env.SPOTIFY_CLIENT_ID || '',
      }),
    };

    const response = await fetch(url, payload);

    const refreshedTokens = await response?.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      access_token: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refresh_token: refreshedTokens.refresh_token ?? token.refresh_token, // Fall back to old refresh token
    };
  } catch {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,user-read-private,streaming,user-follow-read',
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, account }): Promise<TToken> {
      // Initial sign in
      if (account) {
        return {
          access_token: account.access_token,
          accessTokenExpires: (account as unknown as any).expires_at * 1000,
          refresh_token: account.refresh_token,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < (token as unknown as any).accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },

    async session({ session, token }): Promise<TSession> {
      return {
        ...session,
        token,
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
