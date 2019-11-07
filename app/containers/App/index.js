/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import ProtectedRoute from './ProtectedRoute';
import HomePage from 'containers/HomePage/Loadable';
const path = [
  'point-of-sales',
  'event',
  'event-space',
  'meeting-rooms',
  'private-office',
  'membership',
  'door-lock',
  'accounting',
  'report',
  'settings',
];

const nav = ['meeting-rooms', 'event-space', 'private-office', 'membership'];

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        {nav.map((key, i) => {
          return (
            <ProtectedRoute
              path={`/:path/:subpages/:id/:request`}
              component={Dashboard}
              key={i}
            />
          );
        })}
        {nav.map((key, i) => {
          return (
            <ProtectedRoute
              path={`/:path/:subpages`}
              component={Dashboard}
              key={i}
            />
          );
        })}
        <ProtectedRoute exact path={`/:path`} component={Dashboard} />
        <Route path="/" component={LoginPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
