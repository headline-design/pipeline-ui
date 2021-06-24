function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
var QR = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(QRCode, _extends({
    ref: ref
  }, props));
});
QR.propTypes = {
  /**
   * Sets the value of the QR code
   */
  value: PropTypes.string.isRequired,

  /**
   * Changes the element that contains the QR code
   */
  renderAs: PropTypes.oneOf(['canvas', 'svg']),

  /**
   * Sets the height and width in pixels
   */
  size: PropTypes.number,

  /**
   * Sets the background color
   */
  bgColor: PropTypes.string,

  /**
   * Sets the foreground color
   */
  fgColor: PropTypes.string,

  /**
   * Sets the amount of error correction
   */
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),

  /**
   * Adds margin around the QR code
   */
  includeMargin: PropTypes.bool
};
QR.defaultProps = {
  renderAs: 'svg',
  size: 128,
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  level: 'L',
  includeMargin: false
};
QR.displayName = 'QR';
export default QR;