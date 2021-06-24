function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, color, space, layout, position, flexbox, border, typography, shadow } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import theme from '../theme';
var styleProps = compose(color, space, layout, position, flexbox, border, typography, shadow);
var StyledBox = /*#__PURE__*/styled('div').withConfig({
  displayName: "Box__StyledBox",
  componentId: "sc-12bsn2y-0"
})(["box-sizing:border-box;", ""], styleProps);
StyledBox.defaultProps = {
  theme: theme
};
var Box = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledBox, _extends({
    ref: ref
  }, props));
});
Box.propTypes = _objectSpread(_objectSpread({}, propTypes.styleProps), {}, {
  theme: PropTypes.object
});
Box.displayName = 'Box';
export { StyledBox };
export default Box;