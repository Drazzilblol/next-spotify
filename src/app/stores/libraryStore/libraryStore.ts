'use client';
import { action, computed, makeObservable, observable, toJS } from 'mobx';
import { getArtists, getPlaylists } from '@/app/stores/libraryStore/libraryService';

class LibraryStore {
  library: any = [];

  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      library: observable,
      pendingRequests: observable,
      getLibrary: computed,
      loadLibrary: action,
    });
  }

  get getLibrary(): any {
    return toJS(this.library);
  }

  setLibrary(library: any) {
    this.library = library;
  }

  loadLibrary() {
    getArtists().then((artists) => {
      this.library = artists.artists;
    });
  }
}

export const libraryStore = new LibraryStore();
