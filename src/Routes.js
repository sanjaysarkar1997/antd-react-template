import React, { lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import LazyLoader from "./LazyWrapper/LazyLoader";
import Authguard from "./Routes/Authguard";
import Home from "./Pages/Home";

const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Restricted = lazy(() => import("./Pages/Login/Login"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound/PageNotFound"));

export default function Routes() {
  return (
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
        <Authguard>
          <Home />
        </Authguard>
        <PublicRoute
          restricted={false}
          component={LazyLoader(PageNotFound)}
          path="*"
        />
      </Switch>
    </BrowserRouter>
  );
}
