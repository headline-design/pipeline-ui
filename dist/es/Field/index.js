var _excluded = ["label", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import Text from '../Text';
var OptionalLabel = /*#__PURE__*/styled(Text).withConfig({
  displayName: "Field__OptionalLabel",
  componentId: "sc-o4retc-0"
})(["&:after{content:' (optional)';font-weight:normal;font-style:italic;}"]);
var Field = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var isRequired = function isRequired(children) {
    var value = false;
    React.Children.forEach(children, function (child) {
      if (child.props.required) {
        value = true;
      }
    });
    return value;
  };

  var renderLabel = function renderLabel(required) {
    if (required) {
      return /*#__PURE__*/React.createElement(Text, {
        fontSize: 1,
        fontWeight: 3,
        mb: 2
      }, label);
    } else {
      return /*#__PURE__*/React.createElement(OptionalLabel, {
        fontSize: 1,
        fontWeight: 3,
        mb: 2
      }, label);
    }
  };

  return /*#__PURE__*/React.createElement(Box, _extends({
    as: 'label',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    mb: 3,
    ref: ref
  }, props), renderLabel(isRequired(children)), children);
});
Field.propTypes = {
  // ...Box.propTypes,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
Field.displayName = 'Field';
export default Field;