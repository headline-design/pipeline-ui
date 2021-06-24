function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Box from '../Box';
var rotate = /*#__PURE__*/keyframes(["0%{transform:rotate(225deg);}100%{transform:rotate(585deg);}"]);
var Rotate = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Loader__Rotate",
  componentId: "sc-1dgqbcb-0"
})(["&{display:block;position:relative;overflow:hidden;}> svg{fill:currentColor;height:100%;width:100%;display:block;animation:", " 1000ms linear infinite;animation-timing-function:cubic-bezier(0.445,0.05,0.55,0.95);}"], rotate);
var Loader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Rotate, _extends({
    ref: ref
  }, props), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 20.5714C16.7339 20.5714 20.5714 16.7339 20.5714 12C20.5714 7.26613 16.7339 3.42857 12 3.42857C7.26613 3.42857 3.42857 7.26613 3.42857 12C3.42857 16.7339 7.26613 20.5714 12 20.5714ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
    fill: "currentColor",
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 20.5714C16.7339 20.5714 20.5714 16.7339 20.5714 12C20.5714 7.26613 16.7339 3.42857 12 3.42857C7.26613 3.42857 3.42857 7.26613 3.42857 12C3.42857 16.7339 7.26613 20.5714 12 20.5714ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 24V15.8824V12H24V24H12Z",
    fill: "currentColor"
  }))));
});
Loader.defaultProps = {
  color: 'primary',
  bg: 'transparent',
  size: '1rem'
};
Loader.propTypes = _objectSpread({}, Box.propTypes);
Loader.displayName = 'Loader';
export default Loader;