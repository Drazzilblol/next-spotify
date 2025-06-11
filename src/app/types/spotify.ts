export type TUser = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: TImage[];
  product: string;
  type: string;
  uri: string;
};

export type TImage = {
  url: string;
  height: number;
  width: number;
};

export type TArtist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: TImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type TArtists = {
  href: string;
  limit: number;
  next: string;
  cursors: {
    after: string;
    before: string;
  };
  total: number;
  items: TArtist[];
};

export type TAlbum = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: TImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: TArtist[];
  album_group: string;
};

export type TAlbumsResponse = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: TAlbum[];
};
