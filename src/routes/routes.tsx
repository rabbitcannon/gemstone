import React from 'react'
import { RoutePaths } from './route-paths'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'redux/store'
import { Provider } from 'react-redux'

import TestComponent from 'pages/test/test'
import Dashboard from 'pages/dashboard'
import Login from 'pages/layouts/auth/login/index'
import DashboardLayout from 'pages/layouts/dashboard/index'
import PayrollIndex from 'pages/payroll/index'
import PlanInformationIndex from 'pages/plan-information'
import PlanHealthIndex from 'pages/plan-health'
import DocumentsIndex from 'pages/documents'
import ReportsIndex from 'pages/reports'
import SupportIndex from 'pages/support'

export const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={RoutePaths.account.login} component={Login} />

        <DashboardLayout>
          <Route
            exact
            path={['/', RoutePaths.dashboard.root]}
            component={Dashboard}
          />
          <Route
            exact
            path={RoutePaths.payroll.root}
            component={PayrollIndex}
          />
          <Route
            exact
            path={RoutePaths.planInformation.root}
            component={PlanInformationIndex}
          />
          <Route
            exact
            path={RoutePaths.planHealth.root}
            component={PlanHealthIndex}
          />
          <Route
            exact
            path={RoutePaths.documents.root}
            component={DocumentsIndex}
          />
          <Route
            exact
            path={RoutePaths.reports.root}
            component={ReportsIndex}
          />
          <Route
            exact
            path={RoutePaths.support.root}
            component={SupportIndex}
          />
          <Route path={RoutePaths.test.testRoute} component={TestComponent} />
        </DashboardLayout>
      </Switch>
    </ConnectedRouter>
  </Provider>
)
