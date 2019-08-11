import React, { cloneElement } from 'react';
import Type from 'prop-types';

import style from './Button.module.css';
import { Button } from './Button';

const BtnIcon = ({ children, iconSize, className, ...props }) => (
  <Button className={`${style.BtnIcon} ${className}`} {...props}>
    {cloneElement(children, {
      size: iconSize,
    })}
  </Button>
);

const iconSizeType = Type.shape({
  height: Type.number,
  width: Type.number,
});

BtnIcon.propTypes = {
  onClick: Type.func.isRequired,
  children: Type.element.isRequired,
  iconSize: iconSizeType.isRequired,
  className: Type.string,
  tabIndex: Type.number,
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
