function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import theme from '../theme';
var defaultProps = {
  fontWeight: 3,
  lineHeight: 'title'
};
var Heading = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref
  }, props));
});
Heading.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  as: 'h2',
  fontSize: '',
  theme: theme
});
Heading.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  theme: PropTypes.object
});
Heading.displayName = 'Heading'; // H1

Heading.h1 = function (props) {
  return /*#__PURE__*/React.createElement(Heading, props);
};

Heading.h1.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  as: 'h1',
  fontSize: 6
});
Heading.h1.displayName = 'Heading.h1'; // H2

Heading.h2 = function (props) {
  return /*#__PURE__*/React.createElement(Heading, props);
};

Heading.h2.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  as: 'h2',
  fontSize: 5
});
Heading.h2.displayName = 'Heading.h2'; // H3

Heading.h3 = function (props) {
  return /*#__PURE__*/React.createElement(Heading, props);
};

Heading.h3.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  as: 'h3',
  fontSize: 4
});
Heading.h3.displayName = 'Heading.h3'; // H4

Heading.h4 = function (props) {
  return /*#__PURE__*/React.createElement(Heading, props);
};

Heading.h4.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  as: 'h4',
  fontSize: 3
});
Heading.h4.displayName = 'Heading.h4'; // H5

Heading.h5 = function (props) {
  return /*#__PURE__*/React.createElement(Heading, props);
};

Heading.h5.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  as: 'h5',
  fontSize: 2
});
Heading.h5.displayName = 'Heading.h5'; // H6

Heading.h6 = function (props) {
  return /*#__PURE__*/React.createElement(Heading, props);
};

Heading.h6.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  as: 'h6',
  fontSize: 1
});
Heading.h6.displayName = 'Heading.h6';
export default Heading;