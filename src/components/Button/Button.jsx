import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, tabIndex }) => {
  let props =
    typeof tabIndex === 'number'
      ? {
          tabIndex,
        }
      : {};

  return (
    <button className={className} onClick={onClick} type="button" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

Button.defaultProps = {
  tabIndex: null,
  className: '',
};

export { Button };
