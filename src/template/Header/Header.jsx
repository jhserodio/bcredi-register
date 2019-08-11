import React from 'react';

import style from './Header.module.css';
import { Logo } from '../../components/Logo/Logo';

const Header = () => (
  <header className={style.Header}>
    <h1 className={style.title}>
      <Logo />
    </h1>
  </header>
);

export { Header };
