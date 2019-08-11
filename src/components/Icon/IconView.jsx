import React from 'react';
import Type from 'prop-types';
import { Svg, viewBoxType } from './Svg';

const IconView = props => (
  <Svg {...props}>
    <path d="M16 12q1.625 0 2.813 1.188t1.188 2.813-1.188 2.813-2.813 1.188-2.813-1.188-1.188-2.813 1.188-2.813 2.813-1.188zM16 22.688q2.75 0 4.719-1.969t1.969-4.719-1.969-4.719-4.719-1.969-4.719 1.969-1.969 4.719 1.969 4.719 4.719 1.969zM16 6q4.938 0 8.938 2.75t5.75 7.25q-1.75 4.5-5.75 7.25t-8.938 2.75-8.938-2.75-5.75-7.25q1.75-4.5 5.75-7.25t8.938-2.75z" />
  </Svg>
);

IconView.defaultProps = {
  viewBox: undefined,
  height: undefined,
  width: undefined,
  className: '',
};

IconView.propTypes = {
  height: Type.number,
  width: Type.number,
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconView };
