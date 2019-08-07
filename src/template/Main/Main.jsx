import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { Home } from '../../pages/Home/Home';

const Main = () => (
  <Switch>
    <Route exact path={paths.home} component={Home} />
  </Switch>
);

export { Main };
