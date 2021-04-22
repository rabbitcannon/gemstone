import React from "react"
import { RoutePaths } from "./RoutePaths"
import { Switch, Route } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"

import TestComponent from "../pages/test/test"
import Login from "../pages/Login/index"
import Dashboard from "../pages/dashboard/index"
import store, { history } from "../redux/store"
import { Provider } from "react-redux"

export const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={RoutePaths.root}>
          <Login />
        </Route>
        <Route path={RoutePaths.account.login}>
          <Login />
        </Route>
        <Route path={RoutePaths.dashboard.root}>
          <Dashboard />
        </Route>
        <Route path={RoutePaths.test.testRoute}>
          <TestComponent />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>
)
