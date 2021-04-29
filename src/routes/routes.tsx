import React from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

import { Home } from './home/Home';

export type RouteConfig = {
  name: string;
  config: RouteProps;
};

export const routesConfigs: RouteConfig[] = [
  {
    name: 'Home',
    config: {
      path: '/',
      exact: true,
      component: Home,
    },
  },
];

export function Routes() {
  const children = routesConfigs.map((routeConfig) => <Route {...routeConfig.config} />);

  return <Switch children={children} />;
}
