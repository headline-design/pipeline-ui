function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

var MAlogo = function MAlogo(props) {
  return React.createElement("svg", props, React.createElement("path", {
    fill: "#245ec7"
      rx: "15.76",
  }), React.createElement("path", {
    d: "M25.374890618026257 12.171238899230957L25.214440636336803 11.558270454406738 24.853431038558483 12.171238899230957 22.674002937972546 16.039752960205078 20.821980766952038 19.29556655883789 19.213927559554577 22.13035774230957 18.28840570896864 23.76315689086914 15.667743019759655 23.76315689086914 17.860541634261608 19.894643783569336 18.380845360457897 18.97435188293457 18.09182482212782 17.89227867126465 17.26283960789442 14.718463897705078 16.594302468001842 12.171238899230957 16.433854393661022 11.558270454406738 16.072844795882702 12.171238899230957 13.893416695296764 16.039752960205078 11.700618080794811 19.894643783569336 9.507818512618542 23.76315689086914 6.887156777083874 23.76315689086914 9.079955391585827 19.894643783569336 11.259383492171764 16.039752960205078 13.452182106673717 12.171238899230957 15.591498665511608 8.398077011108398 15.644981674849987 8.3163480758667 17.931374840438366 8.3163480758667 18.038340859115124 8.724993705749512 18.867326073348522 11.885187149047852 18.94755106419325 12.171238899230957 19.69631128758192 15.045380592346191 19.9637253805995 16.039752960205078 19.98797159641981 16.13172721862793 20.039969734847546 16.039752960205078 22.23277025669813 12.171238899230957 24.37208490818739 8.398077011108398 24.425568871200085 8.3163480758667 26.71196299046278 8.3163480758667 26.818927101790905 8.724993705749512 31.21642427891493 23.76315689086914 28.595763497054577 23.76315689086914z",
    fill: "#fff"
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
var MMStyledButton = /*#__PURE__*/styled(StyledButton).withConfig({
  displayName: "MAlogoButton__MMStyledButton",
  componentId: "sc-7dveoh-0"
})(["&{transition:all 0.15s ease;}&:hover{box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&& > svg.r-ff-icon{height:", ";width:", ";margin-right:0.5rem;margin-bottom:-2px;}"], function (props) {
  return props.size === 'small' ? '1rem' : '1.5rem';
}, function (props) {
  return props.size === 'small' ? '1rem' : '1.5rem';
});
var StyledButtonSolid = /*#__PURE__*/styled(MMStyledButton).withConfig({
  displayName: "MAlogoButton__StyledButtonSolid",
  componentId: "sc-7dveoh-1"
})(["&{color:", ";background:", ";}&:hover{background-color:", ";}&:active{background-color:", ";}"], brandColors.foregroundColor, brandColors.baseColor, brandColors.hoverColor, brandColors.activeColor);
var StyledButtonOutline = /*#__PURE__*/styled(MMStyledButton).withConfig({
  displayName: "MAlogoButton__StyledButtonOutline",
  componentId: "sc-7dveoh-2"
})(["&{color:#333;background:", ";border:1px solid #ccc;}&:hover{background-color:#f3f2f2;}&:active{background-color:#e4e4e4;}"], brandColors.foregroundColor);

var ButtonBody = function ButtonBody(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return React.createElement(React.Fragment, null, React.createElement(MAlogo, {
    className: 'r-ff-icon',
    size: size
  }), children);
};

var MAlogoButtonSolid = function MAlogoButtonSolid(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["className", "children"]);

  return React.createElement(StyledButtonSolid, _extends({
    className: className
  }, props), React.createElement(ButtonBody, {
    children: children,
    size: props.size
  }));
};

var MAlogoButtonOutline = function MAlogoButtonOutline(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["className", "children"]);

  return React.createElement(StyledButtonOutline, _extends({
    className: className
  }, props), React.createElement(ButtonBody, {
    children: children,
    size: props.size
  }));
};

var defaultProps = _objectSpread({}, Button.defaultProps, {
  width: 'auto',
  borderRadius: 1,
  boxShadow: 1
});

MAlogoButtonSolid.defaultProps = defaultProps;
MAlogoButtonOutline.defaultProps = defaultProps;
var MAlogoButton;
MAlogoButton = MAlogoButtonSolid;
MAlogoButton.Solid = MAlogoButtonSolid;
MAlogoButton.Outline = MAlogoButtonOutline;
MAlogoButton.propTypes = _objectSpread({}, Button.propTypes);
MAlogoButton.displayName = 'MAlogoButton';
export default MAlogoButton;