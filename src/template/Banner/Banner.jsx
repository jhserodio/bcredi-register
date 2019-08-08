import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './Banner.module.css';
import banner from '../../img/banner.jpg';

const Banner = () => (
  <div className={style.Banner}>
    <div className={style.backgroundImage}>
      <img src={banner} />
    </div>
    <div className={style.messages}>
      <p className={style.quote}>
        <FormattedMessage id="banner.quote" />
      </p>
      <strong className={style.author}>
        <FormattedMessage id="banner.author" />
      </strong>
      <span className={style.local}>
        <FormattedMessage id="banner.local" />
      </span>
    </div>
  </div>
);

export { Banner };
