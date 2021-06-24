function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import Box, { StyledBox } from '../Box';
import theme from '../theme';
var hoverColor = system({
  hoverColor: {
    property: 'color',
    scale: 'colors'
  }
});
var activeColor = system({
  activeColor: {
    property: 'color',
    scale: 'colors'
  }
});
var StyledLink = /*#__PURE__*/styled(StyledBox).withConfig({
  displayName: "Link__StyledLink",
  componentId: "c3za4m-0"
})(["&{text-decoration:none;cursor:pointer;}&:hover{text-decoration:underline;", ";}&:active{text-decoration:none;", ";}"], hoverColor, activeColor);
var Link = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledLink, _extends({
    as: 'a',
    ref: ref
  }, props));
});
Link.defaultProps = {
  color: 'primary',
  hoverColor: 'primary-light',
  activeColor: 'primary-dark',
  fontSize: 1,
  fontWeight: 3
};
Link.propTypes = _objectSpread(_objectSpread({}, Box.PropTypes), {}, {
  theme: PropTypes.object
});
Link.displayName = 'Link';
export default Link;