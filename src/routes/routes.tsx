import React from 'react'
import { RoutePaths } from './RoutePaths'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import TestComponent from 'pages/test/test'
import Dashboard from 'pages/dashboard'
import Auth from 'pages/layouts/auth/index'
import Login from 'pages/layouts/auth/login/index'
import DashboardLayout from 'pages/layouts/dashboard/index'
import Payroll from 'pages/payroll/index'
import store, { history } from 'redux/store'
import { Provider } from 'react-redux'

export const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Auth>
        <Route exact path={RoutePaths.account.login} component={Login} />
      </Auth>

      <DashboardLayout>
        <Route exact path={RoutePaths.dashboard.root} component={Dashboard} />
        <Route exact path={RoutePaths.payroll.root} component={Payroll} />
        <Route path={RoutePaths.test.testRoute} component={TestComponent} />
      </DashboardLayout>
    </ConnectedRouter>
  </Provider>
)
