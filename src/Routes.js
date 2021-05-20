import React, { lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import LazyLoader from "./LazyWrapper/LazyLoader";

const Home = lazy(() => import("./Pages/Home"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));
const Login = lazy(() => import("./Pages/SignUp/SignUp"));
const Restricted = lazy(() => import("./Pages/Login/Login"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound/PageNotFound"));

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={false}
            component={LazyLoader(Login)}
            path="/login"
          />
          <PublicRoute
            restricted={false}
            component={LazyLoader(SignUp)}
            path="/sign-up"
          />
          <PrivateRoute component={LazyLoader(Restricted)} path="/private" />
          <PublicRoute
            restricted={false}
            component={LazyLoader(Home)}
            path="/"
            exact
          />
          <PublicRoute
            restricted={false}
            component={LazyLoader(PageNotFound)}
            path="*"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
