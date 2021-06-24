var _excluded = ["className", "children"],
    _excluded2 = ["className", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

var MAlogo = function MAlogo(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "currentLayer"
  }, /*#__PURE__*/React.createElement("title", null, "Layer 1"), /*#__PURE__*/React.createElement("rect", {
    rx: "15.76",
    height: "31.904",
    width: "31.52",
    y: "1",
    x: "3.889",
    fill: "#245ec7"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M25.375 12.171l-.16-.613-.362.613-2.179 3.869-1.852 3.256-1.608 2.834-.926 1.633h-2.62l2.193-3.868.52-.92-.29-1.083-.828-3.174-.669-2.547-.16-.613-.361.613-2.18 3.869-2.192 3.855-2.193 3.868h-2.62l2.192-3.868 2.18-3.855 2.192-3.869 2.14-3.773.053-.082h2.286l.107.409.83 3.16.08.286.748 2.874.268.995.024.092.052-.092 2.193-3.869 2.14-3.773.053-.082h2.286l.107.409 4.397 15.038h-2.62z"
  })));
};

MAlogo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "1 -1 35 35",
  fill: "none"
};
import Button, { StyledButton } from '../Button/BaseButton';
var brandColors = {
  baseColor: '#000',
  hoverColor: '#4c4c4c',
  activeColor: '#999',
  foregroundColor: '#FFFFFF'
};
var MAStyledButton = /*#__PURE__*/styled(StyledButton).withConfig({
  displayName: "MyAlgoButton__MAStyledButton",
  componentId: "sc-1kp2xfd-0"
})(["&{transition:all 0.15s ease;}&:hover{box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&& > svg.r-ff-icon{height:", ";width:", ";margin-right:0.5rem;margin-bottom:-2px;}"], function (props) {
  return props.size === 'small' ? '1rem' : '1.5rem';
}, function (props) {
  return props.size === 'small' ? '1rem' : '1.5rem';
});
var StyledButtonSolid = /*#__PURE__*/styled(MAStyledButton).withConfig({
  displayName: "MyAlgoButton__StyledButtonSolid",
  componentId: "sc-1kp2xfd-1"
})(["&{color:", ";background:", ";}&:hover{background-color:", ";}&:active{background-color:", ";}"], brandColors.foregroundColor, brandColors.baseColor, brandColors.hoverColor, brandColors.activeColor);
var StyledButtonOutline = /*#__PURE__*/styled(MAStyledButton).withConfig({
  displayName: "MyAlgoButton__StyledButtonOutline",
  componentId: "sc-1kp2xfd-2"
})(["&{color:#333;background:", ";border:1px solid #ccc;}&:hover{background-color:#f3f2f2;}&:active{background-color:#e4e4e4;}"], brandColors.foregroundColor);

var ButtonBody = function ButtonBody(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MAlogo, {
    className: 'r-ff-icon',
    size: size
  }), children);
};

var MyAlgoButtonSolid = function MyAlgoButtonSolid(_ref2) {
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

var MyAlgoButtonOutline = function MyAlgoButtonOutline(_ref3) {
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
  width: 'auto',
  borderRadius: 1,
  boxShadow: 1
});

MyAlgoButtonSolid.defaultProps = defaultProps;
MyAlgoButtonOutline.defaultProps = defaultProps;
var MyAlgoButton;
MyAlgoButton = MyAlgoButtonSolid;
MyAlgoButton.Solid = MyAlgoButtonSolid;
MyAlgoButton.Outline = MyAlgoButtonOutline;
MyAlgoButton.propTypes = _objectSpread({}, Button.propTypes);
MyAlgoButton.displayName = 'MyAlgoButton';
export default MyAlgoButton;