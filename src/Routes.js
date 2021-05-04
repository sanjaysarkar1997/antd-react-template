import React, { lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// import Home from "./Pages/Home";
import { Login } from "./Pages/Login/Login";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { Restricted } from "./Pages/Restricted";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import LazyLoader from "./LazyWrapper/LazyLoader";

const Home = lazy(() => import("./Pages/Home"));
const SignUp = lazy(()=>import("./Pages/SignUp/SignUp"))

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/login" />
          <PublicRoute
            restricted={false}
            component={LazyLoader(SignUp)}
            path="/sign-up"
          />
          <PrivateRoute component={Restricted} path="/private" />
          <PublicRoute
            restricted={false}
            component={LazyLoader(Home)}
            path="/"
            exact
          />
          <PublicRoute restricted={false} component={PageNotFound} path="*" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
