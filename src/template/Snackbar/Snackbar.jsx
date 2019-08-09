import React from 'react';
import PropTypes from 'prop-types';

import style from './Snackbar.module.css';
import { SNACKBAR_STATUS, SNACKBAR_TIMEOUT } from '../../constants/snackbar';

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
          {`${content.message}! ${content.description}`}
        </div>
      </div>
    </div>
  );
};

Snackbar.propTypes = {
  snackbarSetActive: PropTypes.func.isRequired,
  content: PropTypes.shape({
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
};

export { Snackbar };
