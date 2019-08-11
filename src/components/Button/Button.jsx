import React from 'react';
import Type from 'prop-types';

const Button = ({ children, onClick, className, tabIndex, type }) => {
  let props =
    typeof tabIndex === 'number'
      ? {
          tabIndex,
        }
      : {};

  return (
    <button className={className} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: Type.string,
  children: Type.element.isRequired,
  className: Type.string,
  onClick: Type.func,
  tabIndex: Type.number,
};

Button.defaultProps = {
  onClick: undefined,
  tabIndex: null,
  type: 'button',
  className: '',
};

export { Button };
