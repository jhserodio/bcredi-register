import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './Home.module.css';

const Home = () => (
  <div class={style.Home}>
    <header className={style.header}>
      <h2 className={style.title}>
        <FormattedMessage id="home.title" />
      </h2>
      <p className={style.message}>
        <FormattedMessage id="home.message" />
      </p>
    </header>
    <div className={style.content}>
      <form />
    </div>
    <footer className={style.footer}>
      <span className={style.message}>
        <FormattedMessage id="home.footer.message" />
      </span>
      <a href="/any-think" className={style.link}>
        <FormattedMessage id="home.footer.link" />
      </a>
    </footer>
  </div>
);

export { Home };
