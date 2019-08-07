import React from 'react';
import PropTypes from 'prop-types';
import { Svg, viewBoxType } from './Svg';

const IconClose = props => (
  <Svg {...props}>
    <path d="M14.47 15.893l-14.164 14.164c-0.394 0.393-0.394 1.031 0 1.425 0.197 0.197 0.455 0.295 0.712 0.295s0.516-0.098 0.712-0.295l14.271-14.27 14.271 14.27c0.197 0.197 0.454 0.295 0.712 0.295s0.515-0.098 0.712-0.295c0.394-0.393 0.394-1.031 0-1.425l-14.163-14.164 14.173-14.174c0.394-0.393 0.394-1.031 0-1.425s-1.031-0.393-1.424 0l-14.279 14.28-14.281-14.28c-0.393-0.393-1.030-0.393-1.424 0s-0.394 1.031 0 1.425l14.174 14.174z" />
  </Svg>
);

IconClose.defaultProps = {
  viewBox: undefined,
  height: undefined,
  width: undefined,
  className: '',
};

IconClose.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  viewBox: viewBoxType,
  className: PropTypes.string,
};

export { IconClose };
