function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
var StyledPill = /*#__PURE__*/styled(Text).withConfig({
  displayName: "Pill__StyledPill",
  componentId: "sc-1wvhj94-0"
})(["&{position:relative;overflow:hidden;}&::after{content:'';display:block;position:absolute;left:0;right:0;top:0;height:100%;width:100%;opacity:0.12;background:currentColor;pointer-events:none;}"]);
var Pill = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledPill, _extends({
    ref: ref
  }, props));
});
Pill.defaultProps = {
  color: 'dark-gray',
  bg: '#FFF',
  fontSize: 1,
  fontWeight: 2,
  lineHeight: 'solid',
  height: '2rem',
  px: 3,
  py: 1,
  borderRadius: 3,
  display: 'inline-flex',
  alignItems: 'center'
};
Pill.propTypes = _objectSpread({}, Text.propTypes);
Pill.displayName = 'Pill';
export default Pill;