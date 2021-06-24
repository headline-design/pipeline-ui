var _excluded = ["className", "label", "name", "value", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { RadioButtonChecked } from '@pipeline-ui/icons/es/md';
import { RadioButtonUnchecked } from '@pipeline-ui/icons/es/md';
import theme from '../theme';
import Box from '../Box';
import Text from '../Text';
var StyledWrapper = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Radio__StyledWrapper",
  componentId: "dmrrhr-0"
})(["&{position:relative;display:inline-block;}> input{cursor:pointer;appearance:none;position:relative;z-index:1;display:block;height:1.5rem;width:1.5rem;margin:0;}> svg{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;height:100%;width:100%;pointer-events:none;fill:", ";}> svg[name='checked']{display:none;z-index:1;fill:", ";}> input:checked ~ svg[name='checked']{display:block;}"], function (props) {
  return themeGet('colors.grey', '#CCC');
}, function (props) {
  return themeGet('colors.primary', '#000');
});
var StyledLabel = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Radio__StyledLabel",
  componentId: "dmrrhr-1"
})(["&{cursor:pointer;}&:hover input:not(:disabled) ~ svg[name='unchecked']{fill:currentColor;}"]);
StyledWrapper.defaultProps = {
  theme: theme
};
var Radio = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledLabel, _extends({
    forwardedAs: 'label',
    display: 'flex',
    alignItems: 'center',
    className: className
  }, props, {
    htmlFor: id,
    opacity: props.disabled ? 0.4 : 1
  }), /*#__PURE__*/React.createElement(StyledWrapper, {
    theme: props.theme
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: 'radio',
    name: name,
    value: value,
    id: id,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement(RadioButtonChecked, {
    name: 'checked'
  }), /*#__PURE__*/React.createElement(RadioButtonUnchecked, {
    name: 'unchecked'
  })), /*#__PURE__*/React.createElement(Text, {
    color: 'text',
    fontSize: 1,
    fontWeight: 3,
    lineHeight: 1,
    ml: 1,
    mr: 2
  }, label));
});
Radio.defaultProps = {
  theme: theme,
  color: 'primary'
};
Radio.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  theme: PropTypes.object,
  label: PropTypes.string
});
Radio.displayName = 'Radio';
export default Radio;