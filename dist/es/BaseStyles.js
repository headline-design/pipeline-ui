var _excluded = ["children"];

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { compose, color, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { themeGet } from '@styled-system/theme-get';
import { normalize } from 'polished';
import theme from './theme';
var GlobalStyle = /*#__PURE__*/createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  html {\n    box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    line-height: 1.25;\n  }\n  h1 {\n    font-size: ", "px;\n  }\n  h2 {\n    font-size: ", "px;\n  }\n  h3 {\n    font-size: ", "px;\n  }\n  h4 {\n    font-size: ", "px;\n  }\n  h5 {\n    font-size: ", "px;\n  }\n  h6 {\n    font-size: ", "px;\n  }\n"])), normalize(), themeGet('fontSizes.6', ''), themeGet('fontSizes.5', ''), themeGet('fontSizes.4', ''), themeGet('fontSizes.3', ''), themeGet('fontSizes.2', ''), themeGet('fontSizes.1', ''));

var Base = function Base(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", rest, /*#__PURE__*/React.createElement(GlobalStyle, null), children);
};

var styleProps = compose(color, typography);
var BaseStyles = /*#__PURE__*/styled(Base).withConfig({
  displayName: "BaseStyles",
  componentId: "yc8f7v-0"
})(["", ""], styleProps);
BaseStyles.defaultProps = {
  fontSize: '2',
  fontFamily: 'sansSerif',
  color: 'text',
  theme: theme
};
BaseStyles.propTypes = _objectSpread(_objectSpread({}, propTypes.styleProps), {}, {
  theme: PropTypes.object
});
export default BaseStyles;