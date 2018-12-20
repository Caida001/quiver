import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './session/navbar_container';
import ChannelIndexContainer from './channel/channel_index_container';
import CategoryIndexContainer from './category/category_index_container';
import FollowContainer from './follow/follow_index_container';
import FilteredChannelContainer from './filtered_channel/filtered_channel_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" component={NavbarContainer} />

    <Route exact path="/categories/:categoryId" component={FilteredChannelContainer} />
    <Route path="/channels" component={FollowContainer} />
    <Route path="/categories" component={FollowContainer} />
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/channels" component={ChannelIndexContainer} />
    <Route exact path="/categories" component={CategoryIndexContainer} />

  </div>
);
export default App;
