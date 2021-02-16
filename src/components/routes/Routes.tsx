import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import IAuthState from "../../domain/IAuthState";
import { CollectionPage } from "../CollectionPage";
import { Dashboard } from "../Dashboard";
import { HomeComponent } from "../HomePageComponent";
import { LoginComponent } from "../LoginComponent";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
export const Routes: React.FC = () => {
  const [authState, setAuthState] = useState<IAuthState>({
    authState: "",
  });
  const authStateChange = (authStateChange: string): void => {
    setAuthState({
      authState: authStateChange,
    });
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route
            path="/login"
            render={(props) => (
              <>
                <LoginComponent
                  authState={authState}
                  onAuthStateChanged={authStateChange}
                  {...props}
                />
              </>
            )}
          />
          <Route path="/home" component={HomeComponent} />

          <AuthenticatedRoute
            authState={authState.authState}
            path="/dashboard"
            component={Dashboard}
          />
          {/* This is the collection route. When a collection is clicked, it should route here */}
          <AuthenticatedRoute
            authState={authState.authState}
            path="/collection/:id"
            component={CollectionPage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};
