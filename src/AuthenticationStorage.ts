export class AuthenticationStorage {
    _sessionStorage: Storage;
    _storage: Storage;
    constructor(sessionStorage: Storage) {
      this._sessionStorage = sessionStorage;
      this._storage = this._sessionStorage;
    }
    setItem(key: string, value: string): void {
      return this._storage.setItem(key, value);
    }
    getItem(key: string): string | null {
      return this._storage.getItem(key);
    }
    removeItem(key: string): void {
      this._storage.removeItem(key);
    }
    clear(): void {
      this._storage.clear();
    }
  }
  const _authenticationStorage = new AuthenticationStorage(window.sessionStorage);
  export default _authenticationStorage;