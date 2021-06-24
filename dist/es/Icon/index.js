var _excluded = ["name", "size"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import RmdIcon from '@pipeline-ui/icons/es/Icon';
import Box from '../Box';
import theme from '../theme';
var Icon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var name = _ref.name,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref
  }, rest), /*#__PURE__*/React.createElement(RmdIcon, {
    name: name,
    size: size
  }));
});
Icon.defaultProps = {
  name: '',
  size: '24px',
  display: 'inline-flex',
  theme: theme
};
Icon.propTypes = {
  /**
   * Sets which icon to display
   */
  name: PropTypes.string.isRequired,

  /**
   * Sets the width and height in pixels
   */
  size: PropTypes.string,

  /**
   * Sets the element display property
   */
  display: PropTypes.string,
  theme: PropTypes.object
};
Icon.displayName = 'Icon';
export default Icon;