var _excluded = ["children", "icon", "iconpos"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { ButtonBody } from './BaseButton';
import SolidButton, { StyledSolidButton } from './SolidButton'; // outline style

var StyledOutlineButton = /*#__PURE__*/styled(StyledSolidButton).withConfig({
  displayName: "OutlineButton__StyledOutlineButton",
  componentId: "sc-1gcz6sz-0"
})(["&{color:var(--main-color);background:transparent;}&:hover{border-color:var(--main-color);}&:hover::before{opacity:0;}&:active{background:#fff;}&:active::before{opacity:0.1;}&::before{opacity:0;}"]);
var OutlineButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      icon = _ref.icon,
      iconpos = _ref.iconpos,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledOutlineButton, _extends({}, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(ButtonBody, {
    icon: icon,
    iconpos: iconpos,
    children: children
  }));
});
OutlineButton.defaultProps = _objectSpread(_objectSpread({}, SolidButton.defaultProps), {}, {
  border: 1,
  borderColor: 'grey',
  boxShadow: 0
});
export default OutlineButton;