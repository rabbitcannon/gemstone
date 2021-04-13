import React from 'react';
import Dashboard from '../pages/dashboard/index'
import Login from '../pages/Login/index'
import { RoutePaths } from './RoutePaths';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TestComponent from "../pages/test/test";

export const Routes = () => (
    <BrowserRouter>
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
    </BrowserRouter>
);