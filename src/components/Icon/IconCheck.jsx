import React from 'react';
import Type from 'prop-types';
import { Svg, viewBoxType } from './Svg';

const IconCheck = props => (
  <Svg {...props}>
    <path d="M34.8 2.616l-21.080 21.080-8.52-8.52c-0.485-0.485-1.156-0.785-1.896-0.785-1.481 0-2.681 1.2-2.681 2.681 0 0.74 0.3 1.411 0.785 1.896l10.416 10.416c0.484 0.488 1.155 0.789 1.896 0.789s1.412-0.302 1.896-0.789l0-0 0.004-0.008 22.968-22.968c0.493-0.486 0.799-1.162 0.799-1.909 0-1.48-1.2-2.68-2.68-2.68-0.746 0-1.421 0.305-1.907 0.797l-0 0z" />
  </Svg>
);

IconCheck.defaultProps = {
  viewBox: { minX: 0, minY: 0, width: 40, height: 32 },
  height: undefined,
  width: undefined,
  className: '',
};

IconCheck.propTypes = {
  height: Type.number,
  width: Type.number,
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconCheck };
