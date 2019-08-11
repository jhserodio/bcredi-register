import React from 'react';
import Type from 'prop-types';
import { Svg, viewBoxType } from './Svg';

const IconHide = props => (
  <Svg {...props}>
    <path d="M15.813 12h0.188q1.625 0 2.813 1.188t1.188 2.813v0.25zM10.063 13.063q-0.75 1.5-0.75 2.938 0 2.75 1.969 4.719t4.719 1.969q1.438 0 2.938-0.75l-2.063-2.063q-0.5 0.125-0.875 0.125-1.625 0-2.813-1.188t-1.188-2.813q0-0.375 0.125-0.875zM2.688 5.688l1.688-1.688 23.625 23.625-1.688 1.688q-0.313-0.313-1.969-1.938t-2.531-2.5q-2.688 1.125-5.813 1.125-4.938 0-8.938-2.75t-5.75-7.25q0.688-1.625 2.156-3.594t2.844-3.031q-0.75-0.75-2.094-2.125t-1.531-1.563zM16 9.313q-1.25 0-2.438 0.5l-2.875-2.875q2.438-0.938 5.313-0.938 4.938 0 8.906 2.75t5.719 7.25q-1.5 3.688-4.563 6.313l-3.875-3.875q0.5-1.188 0.5-2.438 0-2.75-1.969-4.719t-4.719-1.969z" />
  </Svg>
);

IconHide.defaultProps = {
  viewBox: undefined,
  height: undefined,
  width: undefined,
  className: '',
};

IconHide.propTypes = {
  height: Type.number,
  width: Type.number,
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconHide };
