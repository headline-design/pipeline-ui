function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { transparentize } from 'polished';
import theme from '../theme';
var StyledProgress = /*#__PURE__*/styled.progress.attrs(function (props) {
  return {
    primarycolor: themeGet('colors.primary', '#000')(props)
  };
}).withConfig({
  displayName: "Progress__StyledProgress",
  componentId: "sc-60sfty-0"
})(["&{appearance:none;display:inline-block;overflow:hidden;height:8px;border-radius:8px;}&::-webkit-progress-bar{background-color:", ";}&::-webkit-progress-value{background-color:", ";border-radius:8px;}"], function (props) {
  return transparentize('0.75', props.primarycolor);
}, function (props) {
  return props.primarycolor;
});
var Progress = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledProgress, _extends({
    ref: ref
  }, props));
});
StyledProgress.defaultProps = {
  theme: theme
}; // Progress.defaultProps = {
//   theme,
// };

Progress.propTypes = {
  theme: PropTypes.object
};
Progress.displayName = 'Progress';
export default Progress;