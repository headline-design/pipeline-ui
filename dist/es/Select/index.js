var _excluded = ["options", "children", "width"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import { ExpandMore } from '@pipeline-ui/icons/es/md';
import { StyledInput } from '../Input';
var StyledWrapper = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Select__StyledWrapper",
  componentId: "sc-1j4z6kc-0"
})(["&{position:relative;display:inline-block;}> svg{pointer-events:none;position:absolute;right:0;top:0;bottom:0;}"]);
var Select = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var options = _ref.options,
      children = _ref.children,
      width = _ref.width,
      props = _objectWithoutProperties(_ref, _excluded);

  var renderChildren = function renderChildren() {
    if (children) {
      return children;
    } else if (options) {
      return options.map(function (option, i) {
        return /*#__PURE__*/React.createElement("option", {
          key: i,
          value: option.value,
          children: option.label
        });
      });
    } else {
      return null;
    }
  };

  return /*#__PURE__*/React.createElement(StyledWrapper, {
    width: width
  }, /*#__PURE__*/React.createElement(StyledInput, _extends({
    as: 'select',
    children: renderChildren(),
    ref: ref,
    width: '100%',
    p: 'auto',
    py: 0,
    pl: 3,
    pr: '3rem'
  }, props)), /*#__PURE__*/React.createElement(ExpandMore, {
    my: 'auto',
    mx: 3
  }));
});
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};
Select.displayName = 'Select';
export default Select;