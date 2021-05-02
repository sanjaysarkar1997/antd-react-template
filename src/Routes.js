import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import { Login } from "./Pages/Login/Login";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { Restricted } from "./Pages/Restricted";
import { SignUp } from "./Pages/SignUp/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/login" />
          <PublicRoute restricted={false} component={SignUp} path="/sign-up" />
          <PrivateRoute component={Restricted} path="/private" />
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={false} component={PageNotFound} path="*" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
