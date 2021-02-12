import { UsernameAttributes } from 'aws-amplify-react';
import React from 'react';
import Bootstrap from '../domain/Bootstrap';
import { ILoginProps } from '../domain/ILoginProps';
import SignUpConfig from '../domain/SignupConfig';
import UserAuthenticator from './UserAuthenticator';
import CollectRImage from '../images/CollectR.jpg';


export const LoginComponent: React.FC<ILoginProps> = (props) => {
      return (
        <>
        <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
          <UserAuthenticator
            {...props}
            usernameAttributes={UsernameAttributes.EMAIL}
            theme={Bootstrap}
            signUpConfig={SignUpConfig}
            onAuthStateChanged={props.onAuthStateChanged}
            authState={props.authState}
          />
        </>
      );
}