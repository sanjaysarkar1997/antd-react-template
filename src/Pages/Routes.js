import React from "react";
import { Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home">
        <div className="div-center">Home</div>
      </Route>
      <Route path="/view">
        <div className="div-center">View</div>
      </Route>
    </Switch>
  );
}
