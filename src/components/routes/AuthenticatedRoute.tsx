import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
export interface IAuthenticatedRouteProps extends RouteProps {
  authState: string;
}
export const AuthenticatedRoute: React.FC<IAuthenticatedRouteProps> = (
  props: IAuthenticatedRouteProps,
) => {
  if (props.authState === 'signedIn') {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};