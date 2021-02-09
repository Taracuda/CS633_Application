import React from 'react';
import { Authenticator } from 'aws-amplify-react';
import { Grid } from 'semantic-ui-react';
import { IAuthProps } from '../domain/IAuthProps';

const UserAuthenticator: React.FC<IAuthProps> = (props: IAuthProps) => {
  const signedIn = 'signedIn';
  return (
    <>
      {props.authState.authState !== signedIn && (
        <>
          <Grid
            columns={2}
            stackable
            style={{ margin: '100px auto 0 auto', maxWidth: '960px' }}
          >
            <Grid.Column textAlign="center" verticalAlign="middle">
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Authenticator
                {...props}
                authState={props.authState.authState}
                onStateChange={props.onAuthStateChanged}
              ></Authenticator>
            </Grid.Column>
          </Grid>
        </>
      )}
      {props.authState.authState === signedIn && (
        <>
          <div style={{ height: '100%' }}>{props.children}</div>
        </>
      )}
    </>
  );
};
export default UserAuthenticator;