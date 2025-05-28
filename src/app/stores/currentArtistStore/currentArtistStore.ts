'use client';
import { action, computed, makeObservable, observable, toJS } from 'mobx';
import { getArtists, getPlaylists } from '@/app/stores/libraryStore/libraryService';
import { getArtistTopTracks } from '@/app/stores/currentArtistStore/currentArtistService';

class CurrentArtistStore {
  artist: any = {};

  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      artist: observable,
      pendingRequests: observable,
      getArtist: computed,
      loadArtist: action,
    });
  }

  get getArtist(): any {
    return toJS(this.artist);
  }

  loadArtist() {
    getArtists().then((artists) => {
      this.artist = artists.artists;
    });
  }

  loadArtistTopTracks(id: string) {
    return getArtistTopTracks(id).then((tracks) => {
      return tracks;
    });
  }
}

export const currentArtistStore = new CurrentArtistStore();
