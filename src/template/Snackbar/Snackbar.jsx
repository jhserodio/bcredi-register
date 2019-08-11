import React from 'react';
import Type from 'prop-types';

import style from './Snackbar.module.css';
import { SNACKBAR_STATUS, SNACKBAR_TIMEOUT } from '../../constants/snackbar';
import { FormattedMessage } from 'react-intl';

const Snackbar = ({ content, active, snackbarSetActive }) => {
  function switchStatus(status) {
    switch (status) {
      case SNACKBAR_STATUS.ERROR:
        return style._error;
      case SNACKBAR_STATUS.INFO:
        return style._info;
      default:
        return style._ok;
    }
  }

  function closeSnackbar() {
    snackbarSetActive(false);
  }

  if (active) {
    setTimeout(() => closeSnackbar(), SNACKBAR_TIMEOUT);
  }

  return (
    <div
      className={`
      ${style.Snackbar}
      ${active ? style._active : ''}
      ${switchStatus(content.status)}`}>
      <div className={style.container}>
        <div className={style.content}>
          <FormattedMessage id={content.message} />!{' '}
          <FormattedMessage id={content.description} />!
        </div>
      </div>
    </div>
  );
};

Snackbar.propTypes = {
  snackbarSetActive: Type.func.isRequired,
  content: Type.shape({
    status: Type.string.isRequired,
    message: Type.string.isRequired,
    description: Type.string.isRequired,
  }).isRequired,
  active: Type.bool.isRequired,
};

export { Snackbar };
