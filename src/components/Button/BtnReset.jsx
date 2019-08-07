import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.css';
import { Button } from './Button';

const BtnReset = ({ children, className, ...props }) => (
  <Button className={`${style.BtnReset} ${className}`} {...props}>
    {children}
  </Button>
);

BtnReset.defaultProps = {
  className: '',
  tabIndex: null,
};

BtnReset.propTypes = {
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};

export { BtnReset };
