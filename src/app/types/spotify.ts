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
