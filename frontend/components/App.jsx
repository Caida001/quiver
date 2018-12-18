import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './session/navbar_container';
import ChannelIndexContainer from './channel/channel_index_container';
import FollowContainer from './follow/follow_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route exact path="/" component={NavbarContainer} />



    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/channels" component={ChannelIndexContainer} />

  </div>
);
export default App;
