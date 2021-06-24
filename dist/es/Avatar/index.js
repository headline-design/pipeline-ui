function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Box from '../Box';

var size = function size(props) {
  switch (props.size) {
    case 'small':
      return "\n        height: 2em;\n        width: 2em;\n      ";

    case 'medium':
      return "\n        height: 3em;\n        width: 3em;\n      ";

    case 'large':
      return "\n        height: 4em;\n        width: 4em;\n      ";

    default:
      return "";
  }
};

var StyledAvatar = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Avatar__StyledAvatar",
  componentId: "sc-1vnmxad-0"
})(["&{position:relative;overflow:hidden;border-radius:100%;background-size:cover;background-position:center;background-repeat:no-repeat;background-image:url(", ");}", ""], function (props) {
  return props.src;
}, size);
StyledAvatar.defaultProps = {
  theme: theme
};
var Avatar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledAvatar, _extends({
    ref: ref
  }, props));
});
Avatar.defaultProps = {
  size: '2rem',
  bg: 'grey',
  alt: 'Avatar'
};
Avatar.propTypes = _objectSpread({
  /**
   * Sets alt attribute on image for accessibility
   */
  alt: PropTypes.string,

  /**
   * Sets avatar height and width
   */
  size: PropTypes.string,

  /**
   * Sets avatar image
   */
  src: PropTypes.string.isRequired,

  /**
   * Sets theme
   */
  theme: PropTypes.object
}, Box.propTypes);
Avatar.displayName = 'Avatar';
export default Avatar;