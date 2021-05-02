import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import { Login } from "./Pages/Login/Login";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { SignUp } from "./Pages/SignUp/SignUp";
import PublicRoute from "./routes/PublicRoute";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/login" />
          <PublicRoute restricted={false} component={SignUp} path="/sign-up" />
          <PublicRoute restricted={false} component={PageNotFound} path="*" />
          <PublicRoute restricted={false} component={Home} path="/" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
