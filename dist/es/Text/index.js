function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import theme from '../theme';
var Text = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref
  }, props));
});
Text.defaultProps = {
  fontSize: 2,
  fontWeight: 2,
  lineHeight: 'copy',
  theme: theme
};
Text.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  theme: PropTypes.object
});
Text.displayName = 'Text';

Text.span = function (props) {
  return /*#__PURE__*/React.createElement(Text, props);
};

Text.span.defaultProps = _objectSpread(_objectSpread({}, Text.defaultProps), {}, {
  as: 'span'
});

Text.p = function (props) {
  return /*#__PURE__*/React.createElement(Text, props);
};

Text.p.defaultProps = _objectSpread(_objectSpread({}, Text.defaultProps), {}, {
  as: 'p'
});

Text.s = function (props) {
  return /*#__PURE__*/React.createElement(Text, props);
};

Text.s.defaultProps = _objectSpread(_objectSpread({}, Text.defaultProps), {}, {
  as: 's'
});
export default Text;