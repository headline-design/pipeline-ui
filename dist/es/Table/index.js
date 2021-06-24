function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { height, fontFamily, boxShadow } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import theme from '../theme';
import Box from '../Box';
import { TYPOGRAPHY } from '../constants';
var StyledTable = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Table__StyledTable",
  componentId: "sc-1oazz9h-0"
})(["&{border-collapse:collapse;}th,td{border:solid;border-width:1px 0;border-color:inherit;text-align:left;padding:0 2rem;}tbody tr{height:", ";}thead tr,tfoot tr{height:", ";}thead th{font-weight:", ";text-transform:uppercase;}", ""], themeGet('height[3]', '4rem'), themeGet('height[2]', '3rem'), themeGet('fontWeights.3', 'bold'), TYPOGRAPHY);
StyledTable.defaultProps = {
  theme: theme
};
var Table = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledTable, _extends({
    ref: ref
  }, props, {
    forwardedAs: 'table'
  }));
});
Table.defaultProps = {
  width: 1,
  border: 1,
  borderColor: 'grey',
  fontSize: 1,
  fontWeight: 2,
  fontFamily: 'sansSerif',
  color: 'dark-gray',
  boxShadow: 1
};
Table.propTypes = _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  theme: PropTypes.object
});
Table.displayName = 'Table';
export default Table;