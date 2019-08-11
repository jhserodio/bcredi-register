import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { HomeContainer } from '../../containers/Home';

const Main = () => (
  <Switch>
    <Route exact path={paths.home} component={HomeContainer} />
  </Switch>
);

export { Main };
