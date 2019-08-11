import React from 'react';
import Type from 'prop-types';

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
  tabIndex: Type.number,
  className: Type.string,
  onClick: Type.func.isRequired,
  children: Type.oneOfType([Type.element, Type.string]).isRequired,
};

export { BtnReset };
