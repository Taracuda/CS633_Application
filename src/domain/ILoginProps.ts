import IAuthState from './IAuthState';

export interface ILoginProps {
  authState: IAuthState;
  onAuthStateChanged: (authStateChange: string) => void;
}