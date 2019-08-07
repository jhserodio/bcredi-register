import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.css';
import { Button } from './Button';

const BtnIcon = ({ children, iconSize, className, ...props }) => (
  <Button className={`${style.BtnIcon} ${className}`} {...props}>
    {cloneElement(children, {
      size: iconSize,
    })}
  </Button>
);

const iconSizeType = PropTypes.shape({
  height: PropTypes.number,
  width: PropTypes.number,
});

BtnIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  iconSize: iconSizeType.isRequired,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
};

BtnIcon.defaultProps = {
  tabIndex: null,
  className: '',
  iconSize: {
    height: 24,
    width: 24,
  },
};

export { BtnIcon };
