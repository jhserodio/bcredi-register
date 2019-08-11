import React from 'react';
import style from './Icon.module.css';
import Type from 'prop-types';

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

const sizeType = Type.shape({
  width: Type.number,
  height: Type.number,
});

const viewBoxType = Type.shape({
  minX: Type.number,
  minY: Type.number,
  width: Type.number,
  height: Type.number,
});

Svg.propTypes = {
  children: Type.oneOfType([Type.element, Type.array]).isRequired,
  className: Type.string,
  viewBox: viewBoxType,
  size: sizeType,
};

Svg.defaultProps = {
  viewBox: { minX: 0, minY: 0, width: 32, height: 32 },
  className: '',
  size: { height: 32, width: 32 },
};

export { Svg, viewBoxType };
