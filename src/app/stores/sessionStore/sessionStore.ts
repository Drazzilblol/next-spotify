import { action, computed, makeObservable, observable, toJS } from 'mobx';

class SessionStore {
  session: any = {};

  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      session: observable,
      pendingRequests: observable,
      getSession: computed,
      setSession: action,
    });
  }

  get getSession(): any {
    return toJS(this.session);
  }

  setSession(session: any) {
    this.session = session;
  }
}

export const sessionStore = new SessionStore();
