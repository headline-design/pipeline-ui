var _excluded = ["children", "icon", "iconpos"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Button, { StyledButton, ButtonBody } from './BaseButton'; // outline styles

var StyledSolidButton = /*#__PURE__*/styled(StyledButton).withConfig({
  displayName: "SolidButton__StyledSolidButton",
  componentId: "sc-16jeih0-0"
})(["&{color:var(--contrast-color);", " background:#FFF;z-index:0;transition:all 0.15s ease;}&:hover{text-decoration:inherit;box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&:hover::before{opacity:0.9;}&:active{box-shadow:none;background:#000;}&::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;height:100%;width:100%;background:var(--main-color);pointer-events:none;}"], ''
/* background: var(--main-color); */
);
var SolidButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      icon = _ref.icon,
      iconpos = _ref.iconpos,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledSolidButton, _extends({}, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(ButtonBody, {
    icon: icon,
    iconpos: iconpos,
    children: children
  }));
});
SolidButton.defaultProps = _objectSpread(_objectSpread({}, Button.defaultProps), {}, {
  borderRadius: 1,
  boxShadow: 1
});
export { StyledSolidButton };
export default SolidButton;