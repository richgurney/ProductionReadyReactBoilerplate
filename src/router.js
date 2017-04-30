import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import mainHome from './components/boilerplate/mainHome';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: mainHome },
  childRoutes: [
    {
      path: 'pages/page1',
      getComponent(location, cb) {
        System.import('./components/boilerplate/page1')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'pages/page2',
      getComponent(location, cb) {
        System.import('./components/boilerplate/page2')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes}/>
  );
};

export default Routes;
