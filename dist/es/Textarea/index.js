function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from '../Input';
var Textarea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledInput, _extends({
    as: 'textarea',
    ref: ref
  }, props));
});
Textarea.defaultProps = {
  lineHeight: 'copy',
  height: 'auto'
};
Textarea.propTypes = {
  theme: PropTypes.object
};
Textarea.displayName = 'Textarea';
export default Textarea;