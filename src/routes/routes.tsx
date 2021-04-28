import React from 'react'
import { RoutePaths } from './RoutePaths'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import TestComponent from 'pages/test/test'
import Dashboard from 'pages/dashboard'
import Login from 'pages/layouts/auth/login/index'
import DashboardLayout from 'pages/layouts/dashboard/index'
import Payroll from 'pages/payroll/index'
import store, { history } from 'redux/store'
import { Provider } from 'react-redux'

export const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={RoutePaths.account.login} component={Login} />

        <DashboardLayout>
          <Route exact path={['/', RoutePaths.dashboard.root]} component={Dashboard} />
          <Route exact path={RoutePaths.payroll.root} component={Payroll} />
          <Route path={RoutePaths.test.testRoute} component={TestComponent} />
        </DashboardLayout>
      </Switch>
    </ConnectedRouter>
  </Provider>
)
