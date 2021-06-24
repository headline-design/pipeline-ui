var _excluded = ["className", "children"],
    _excluded2 = ["className", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tint, shade } from 'polished';

var UPlogo = function UPlogo(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M22.842 17.08L12.839 1.458a.997.997 0 0 0-1.678 0L1.159 17.08a.993.993 0 0 0 .466 1.458l10.003 4.032a.997.997 0 0 0 .746 0l10.003-4.032a.993.993 0 0 0 .466-1.458zM12 8.628a3.33 3.33 0 0 1 3.331 3.331A3.33 3.33 0 0 1 12 15.291a3.33 3.33 0 1 1 0-6.663zm4.767 9.506c-.963.43-2.566.722-4.407.758h-.007c-.115.003-.234.003-.353.003h-.006c-.12 0-.235 0-.354-.003h-.006c-1.838-.036-3.444-.328-4.408-.758-1.355-.515-2.203-1.24-2.203-2.05 0-.98 1.246-1.84 3.132-2.342.086.19.186.37.298.543-1.799.453-2.827 1.205-2.827 1.802 0 .286.235.607.675.913.235-.633 1.632-1.16 3.543-1.392.63.373 1.366.592 2.15.592a4.22 4.22 0 0 0 2.149-.591c1.911.23 3.308.758 3.543 1.39.44-.305.675-.626.675-.912 0-.597-1.025-1.349-2.827-1.802.112-.174.212-.353.298-.543 1.886.504 3.133 1.365 3.133 2.342.006.81-.842 1.535-2.198 2.05z"
  }));
};

UPlogo.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "#5C4BCD",
  xmlns: "http://www.w3.org/2000/svg"
};
import Button, { StyledButton } from '../Button/BaseButton';
var brandColors = {
  baseColor: '#5c50ca',
  hoverColor: tint(0.1, '#5c50ca'),
  activeColor: shade(0.1, '#5c50ca'),
  foregroundColor: '#FFFFFF'
};
var UPStyledButton = /*#__PURE__*/styled(StyledButton).withConfig({
  displayName: "UPortButton__UPStyledButton",
  componentId: "sc-1iw8kl0-0"
})(["&{transition:all 0.15s ease;}&:hover{box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&& > svg.r-up-icon{height:", ";width:", ";margin-right:0.5rem;}"], function (props) {
  return props.size === 'small' ? '16px' : '24px';
}, function (props) {
  return props.size === 'small' ? '16px' : '24px';
});
var StyledButtonSolid = /*#__PURE__*/styled(UPStyledButton).withConfig({
  displayName: "UPortButton__StyledButtonSolid",
  componentId: "sc-1iw8kl0-1"
})(["&{color:", ";background:", ";}&:hover{background-color:", ";}&:active{background-color:", ";}> svg:first-child{fill:", ";}"], brandColors.foregroundColor, brandColors.baseColor, brandColors.hoverColor, brandColors.activeColor, brandColors.foregroundColor);
var StyledButtonOutline = /*#__PURE__*/styled(UPStyledButton).withConfig({
  displayName: "UPortButton__StyledButtonOutline",
  componentId: "sc-1iw8kl0-2"
})(["&{color:#333;background:", ";border:1px solid #ccc;}&:hover{background-color:#f3f2f2;}&:active{background-color:#e4e4e4;}"], brandColors.foregroundColor);

var ButtonBody = function ButtonBody(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UPlogo, {
    className: 'r-up-icon',
    size: size
  }), children);
};

var UPortButtonSolid = function UPortButtonSolid(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/React.createElement(StyledButtonSolid, _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement(ButtonBody, {
    children: children,
    size: props.size
  }));
};

var UPortButtonOutline = function UPortButtonOutline(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded2);

  return /*#__PURE__*/React.createElement(StyledButtonOutline, _extends({
    className: className
  }, props), /*#__PURE__*/React.createElement(ButtonBody, {
    children: children,
    size: props.size
  }));
};

var defaultProps = _objectSpread(_objectSpread({}, Button.defaultProps), {}, {
  width: [1, 'auto'],
  borderRadius: 1,
  boxShadow: 1
});

UPortButtonSolid.defaultProps = defaultProps;
UPortButtonOutline.defaultProps = defaultProps;
var UPortButton;
UPortButton = UPortButtonOutline;
UPortButton.Solid = UPortButtonSolid;
UPortButton.Outline = UPortButtonOutline;
UPortButton.propTypes = _objectSpread({}, Button.propTypes);
UPortButton.displayName = 'UPortButton';
export default UPortButton;