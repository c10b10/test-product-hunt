import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { RouteLatest } from "./RouteLatest";

export const Routes = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Main>
          <Switch>
            <Route exact={true} path="/" component={RouteLatest} />
          </Switch>
        </Main>
      </>
    </BrowserRouter>
  );
};
