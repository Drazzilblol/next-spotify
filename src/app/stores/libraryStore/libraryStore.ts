'use client';
import { action, computed, makeObservable, observable, toJS } from 'mobx';
import { getArtists } from '@/app/stores/libraryStore/libraryService';
import { TArtists } from '@/app/types/spotify';

class LibraryStore {
  library: TArtists = {} as TArtists;

  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      library: observable,
      pendingRequests: observable,
      getLibrary: computed,
      loadLibrary: action,
      setLibrary: action,
    });
  }

  get getLibrary(): TArtists {
    return toJS(this.library);
  }

  setLibrary(library: TArtists) {
    this.library = library;
  }

  loadLibrary() {
    getArtists().then((artists) => {
      this.setLibrary(artists);
    });
  }
}

export const libraryStore = new LibraryStore();
