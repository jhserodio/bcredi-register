import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import style from './Banner.module.css';
import banner from '../../img/banner.jpg';

let Banner = ({ intl: { formatMessage } }) => (
  <div className={style.Banner}>
    <div className={style.backgroundImage}>
      <img src={banner} alt={formatMessage({ id: 'banner.local' })} />
    </div>
    <div className={style.messages}>
      <p className={style.quote}>{formatMessage({ id: 'banner.quote' })} </p>
      <strong className={style.author}>
        {formatMessage({ id: 'banner.author' })}
      </strong>
      <span className={style.local}>
        {formatMessage({ id: 'banner.local' })}
      </span>
    </div>
  </div>
);

Banner.propTypes = {
  intl: intlShape.isRequired,
};

Banner = injectIntl(Banner);

export { Banner };
