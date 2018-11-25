import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './session/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" component={NavbarContainer} />

    <Route exact path="/" component={SplashContainer} />
  </div>
);
export default App;
