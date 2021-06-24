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
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M8.49 3.5L1.492.5l-1 3 2 8.5 18.995-.5 2-8-1.5-3-6.499 3H8.49z",
    fill: "#763D16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.99 12h10.998v7H6.99v-7z",
    fill: "#333"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#333",
    d: "M7.99 17h5.998v3H7.99z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.581 10.664a.609.609 0 0 1 .126.585l-1.484 4.59a.517.517 0 0 0 0 .356l1.296 4.445c.104.334.438.522.752.417l4.452-1.231c.188-.063.397 0 .564.125l.773.626c.021.021.021.021.042.021l1.923 1.336c.104.062.23.104.355.104H13.6c.125 0 .25-.042.355-.104l1.923-1.336c.02 0 .02-.02.042-.02l.773-.627a.663.663 0 0 1 .564-.125l4.452 1.231c.335.084.669-.104.753-.417l1.295-4.445a.517.517 0 0 0 0-.355l-1.483-4.591a.599.599 0 0 1 .125-.585l1.588-7.116a.536.536 0 0 0-.02-.313L23.024.417c-.105-.334-.48-.5-.815-.375l-6.94 2.587a.744.744 0 0 1-.208.042H8.917c-.083 0-.146-.02-.209-.042L1.77.042c-.334-.126-.71.041-.815.375l-.92 2.818a.524.524 0 0 0-.02.313l1.567 7.116zm12.415 3.59l.522-1.085c.063-.126.23-.188.356-.126l1.254.564c.23.104.209.438-.042.522l-1.756.521a.285.285 0 0 1-.334-.396zm-.104-7.534c-.126-.105-.126-.313.02-.397l7.9-5.405a.252.252 0 0 1 .377.125l.982 2.692c.021.042.021.084 0 .147l-1.61 6.198a.226.226 0 0 1-.292.146l-4.347-1.169c-.042 0-.063-.02-.084-.042L13.891 6.72zm-3.825 12.814l.146-1.21c0-.063.042-.126.105-.168l.292-.208c.042-.021.084-.042.126-.042h2.466c.042 0 .104.02.125.042l.293.208c.063.042.083.105.104.167l.126 1.21a.243.243 0 0 1-.23.272h-3.344c-.105 0-.21-.125-.21-.271zM7.85 13.607l1.254-.564a.27.27 0 0 1 .356.126l.522 1.085c.105.208-.104.438-.334.375l-1.777-.521c-.23-.063-.25-.397-.02-.501zM.808 3.86c-.021-.042 0-.105 0-.146l.982-2.672c.063-.146.251-.208.376-.125l7.9 5.405a.244.244 0 0 1 .022.397L7.14 9.015a.159.159 0 0 1-.084.042L2.71 10.226a.226.226 0 0 1-.293-.146L.807 3.86z",
    fill: "#F36D34"
  }));
};

MAlogo.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
import Button, { StyledButton } from '../Button/BaseButton';
var brandColors = {
  baseColor: '#000',
  hoverColor: '#4c4c4c',
  activeColor: '#999',
  foregroundColor: '#FFFFFF'
};
var MAStyledButton = /*#__PURE__*/styled(StyledButton).withConfig({
  displayName: "MyAlgoButton__MMStyledButton",
  componentId: "sz7rom-0"
})(["&{transition:all 0.15s ease;}&:hover{box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&& > svg.r-ff-icon{height:", ";width:", ";margin-right:0.5rem;margin-bottom:-2px;}"], function (props) {
  return props.size === 'small' ? '1rem' : '1.5rem';
}, function (props) {
  return props.size === 'small' ? '1rem' : '1.5rem';
});
var StyledButtonSolid = /*#__PURE__*/styled(MAStyledButton).withConfig({
  displayName: "MyAlgoButton__StyledButtonSolid",
  componentId: "sz7rom-1"
})(["&{color:", ";background:", ";}&:hover{background-color:", ";}&:active{background-color:", ";}"], brandColors.foregroundColor, brandColors.baseColor, brandColors.hoverColor, brandColors.activeColor);
var StyledButtonOutline = /*#__PURE__*/styled(MAStyledButton).withConfig({
  displayName: "MyAlgoButton__StyledButtonOutline",
  componentId: "sz7rom-2"
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
