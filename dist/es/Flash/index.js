var _excluded = ["className", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import theme from '../theme';
import Box from '../Box';
import Text from '../Text';
import Link from '../Link';
var lastId = 0;

var newID = function newID() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  return "".concat(prefix).concat(lastId++);
};

var flashVariant = variant({
  key: 'messageStyle'
});
var StyledFlash = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Flash__StyledFlash",
  componentId: "sc-xn3kdw-0"
})(["", " &{position:relative;}"], flashVariant);
var StyledLink = /*#__PURE__*/styled(Link).attrs(function (props) {
  return {
    color: 'inherit',
    fontSize: 'inherit'
  };
}).withConfig({
  displayName: "Flash__StyledLink",
  componentId: "sc-xn3kdw-1"
})(["&{cursor:pointer;}&:hover{color:inherit;}"]);
var Flash = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var status = props.variant;
  var id = newID('Flash');
  var contentID = "".concat(id, "Content");
  var ariaRoleType = 'status';

  switch (status) {
    case 'warning':
      ariaRoleType = 'alert';
      break;

    case 'danger':
      ariaRoleType = 'alert';
      break;

    default: // invalid status

  }

  return /*#__PURE__*/React.createElement(StyledFlash, _extends({
    className: className,
    tabIndex: 0,
    role: ariaRoleType,
    "aria-live": "polite",
    "aria-describedby": contentID,
    ref: ref
  }, props), /*#__PURE__*/React.createElement(Text, {
    color: 'inherit',
    display: 'inherit',
    id: contentID
  }, children));
});
Flash.defaultProps = {
  theme: theme,
  variant: 'base',
  p: '3',
  border: '1',
  borderRadius: 1,
  width: '100%'
};
Flash.propTypes = _objectSpread({
  /**
   * Sets the colors of the background, text and links
   */
  variant: PropTypes.oneOf(['base', 'success', 'warning', 'danger', 'info'])
}, Box.propTypes);
Flash.displayName = 'Flash';
Flash.Link = StyledLink;
Flash.Link.displayName = 'Flash.Link';
export default Flash;