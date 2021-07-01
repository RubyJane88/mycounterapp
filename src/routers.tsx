import React from "react";
import { Route, Switch } from "react-router";
import CounterPage from "./pages/CounterPage";

const Routers = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={CounterPage} />
    </Switch>
  );
};

export default Routers;
