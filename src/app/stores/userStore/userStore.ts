'use client';
import { action, computed, makeObservable, observable, toJS } from 'mobx';
import { getUser } from '@/app/stores/userStore/userService';
import {libraryStore} from "@/app/stores/libraryStore/libraryStore";

class UserStore {
  user: any = {};
  deviceId: string = '';
  playback: Spotify.PlaybackState = {} as Spotify.PlaybackState;

  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      user: observable,
      deviceId: observable,
      playback: observable,
      pendingRequests: observable,
      getUser: computed,
      getDeviceID: computed,
      getPlayback: computed,
      loadUser: action,
      setDeviceID: action,
      setPlayback: action,
    });
  }

  get getUser(): boolean {
    return toJS(this.user);
  }

  get getDeviceID(): string {
    return toJS(this.deviceId);
  }

  get getPlayback(): Spotify.PlaybackState {
    return toJS(this.playback);
  }

  setDeviceID(deviceId: string) {
    this.deviceId = deviceId;
  }

  setPlayback(_playback: any) {
    this.playback = _playback;
  }

  loadUser() {
    getUser().then((user) => {
      this.user = user;
      libraryStore.loadLibrary()
    });
  }
}

export const userStore = new UserStore();
