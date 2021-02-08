import { UsernameAttributes } from 'aws-amplify-react';
import { ISignUpConfig } from 'aws-amplify-react/lib-esm/Auth/SignUp';
import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IBootstrap } from '../Theme/Theme/IBootstrap';
import IAuthState from './IAuthState';
export interface IAuthProps {
  usernameAttributes: UsernameAttributes | undefined;
  theme: IBootstrap;
  signUpConfig: ISignUpConfig;
  onAuthStateChanged: (authStateChange: string) => void;
  authState: IAuthState;
  children?: ReactNode;
}