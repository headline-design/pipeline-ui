function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonStyle, variant, style } from 'styled-system';
import { StyledBox } from '../Box';
import Icon from '../Icon';
var buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes'
});
var mainColor = style({
  prop: 'mainColor',
  cssProperty: '--main-color',
  key: 'colors'
});
var contrastColor = style({
  prop: 'contrastColor',
  cssProperty: '--contrast-color',
  key: 'colors'
});
var StyledButton = /*#__PURE__*/styled(StyledBox).withConfig({
  displayName: "BaseButton__StyledButton",
  componentId: "sc-1hj5v8i-0"
})(["&{-webkit-font-smoothing:antialiased;appearance:none;user-select:none;white-space:nowrap;text-decoration:none;text-align:center;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;padding:", ";}&:hover{cursor:pointer;}&:disabled{opacity:0.5;pointer-events:none;}> span.button-text{display:inline-flex;}", " > div > svg,> span.button-text{position:relative;z-index:1;user-select:none;pointer-events:none;}> div > svg{display:block;}> div:first-child > svg{margin-left:-0.5rem;margin-right:.5rem;}> div:last-child > svg{margin-left:.5rem;margin-right:-0.5rem;}> div:first-child:last-child > svg{margin:0;}", " ", " ", " ", ""], function (props) {
  return props.icononly ? '0' : props.p;
}, ''
/* with icon styles */
, mainColor, contrastColor, buttonStyle, buttonSize);
StyledButton.defaultProps = {
  as: 'button'
};

var ButtonBody = function ButtonBody(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      iconpos = _ref.iconpos;

  if (icon) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, icon && !iconpos && /*#__PURE__*/React.createElement(Icon, {
      name: icon
    }), icon && iconpos == 'left' && /*#__PURE__*/React.createElement(Icon, {
      name: icon
    }), children && /*#__PURE__*/React.createElement("span", {
      className: "button-text",
      children: children
    }), icon && iconpos == 'right' && /*#__PURE__*/React.createElement(Icon, {
      name: icon
    }));
  } else {
    return /*#__PURE__*/React.createElement("span", {
      className: "button-text",
      children: children
    });
  }
};

var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledButton, _extends({}, props, {
    ref: ref
  }));
});
Button.defaultProps = {
  // base props
  position: 'relative',
  height: '3rem',
  minWidth: '3rem',
  px: 4,
  py: 0,
  fontSize: 'inherit',
  fontFamily: 'sansSerif',
  fontWeight: 3,
  lineHeight: 1,
  // color props
  color: 'white',
  bg: 'silver',
  mainColor: 'primary',
  contrastColor: 'white',
  border: 'none'
};
Button.propTypes = {
  /**
   * Sets theme
   */
  theme: PropTypes.object,

  /**
   * Sets background color of button
   */
  mainColor: PropTypes.string,

  /**
   * Sets text color of button
   */
  contrastColor: PropTypes.string,

  /**
   * Sets font and spacing size of button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Sets icon of button
   */
  icon: PropTypes.string,

  /**
   * Sets icon position on button
   */
  iconpos: PropTypes.oneOf(['left', 'right']),

  /**
   * Sets padding on button with icon and no text
   */
  icononly: PropTypes.bool
};
Button.displayName = 'Button';
export { StyledButton, ButtonBody };
export default Button;