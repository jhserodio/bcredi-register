import React from 'react';
import style from './Icon.module.css';
import PropTypes from 'prop-types';

const Svg = ({ children, className, viewBox, size }) => {
  const { minX, minY, width, height } = viewBox;

  return (
    <svg
      viewBox={`${minX} ${minY} ${width} ${height}`}
      width={size.width}
      height={size.height}
      className={`${style.Icon} ${className}`}>
      {children}
    </svg>
  );
};

const sizeType = PropTypes.shape({
  width: PropTypes.number,
  height: PropTypes.number,
});

const viewBoxType = PropTypes.shape({
  minX: PropTypes.number,
  minY: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
});

Svg.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  className: PropTypes.string,
  viewBox: viewBoxType,
  size: sizeType,
};

Svg.defaultProps = {
  viewBox: { minX: 0, minY: 0, width: 32, height: 32 },
  className: '',
  size: { height: 32, width: 32 },
};

export { Svg, viewBoxType };
