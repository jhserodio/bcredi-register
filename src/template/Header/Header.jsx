import React from 'react';

import style from './Header.module.css';
import { Logo } from '../../components/Logo/Logo';

const Header = () => (
  <header className={style.Header}>
    <Logo />
  </header>
);

export { Header };
