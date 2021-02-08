import { UsernameAttributes } from 'aws-amplify-react';
import React from 'react';
import Bootstrap from '../domain/Bootstrap';
import { ILoginProps } from '../domain/ILoginProps';
import SignUpConfig from '../domain/SignupConfig';
import UserAuthenticator from './UserAuthenticator';

export const LoginComponent: React.FC<ILoginProps> = (props) => {
    const authChangeHandler = (authStateChange: string) => {
      console.log(authStateChange);
      };
      return (
        <>
          <UserAuthenticator
            {...props}
            usernameAttributes={UsernameAttributes.EMAIL}
            theme={Bootstrap}
            signUpConfig={SignUpConfig}
            onAuthStateChanged={authChangeHandler}
            authState={props.authState}
          />
        </>
      );
}