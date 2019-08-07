import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './Home.module.css';

const Home = () => (
  <div class={style.Home}>
    <FormattedMessage id="home.title" />
  </div>
);

export { Home };
