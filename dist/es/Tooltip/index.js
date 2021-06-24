var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Popper from '@d8660091/react-popper';
import { isBrowser } from '../utils';
import theme from '../theme';
import Text from '../Text';
/**
 * Tooltip display a message near to an anchoring element when the user's mouse hovers or focus is set on anchoring element.
 */

var StyledTooltip = /*#__PURE__*/styled(Text).withConfig({
  displayName: "Tooltip__StyledTooltip",
  componentId: "hnzlrg-0"
})(["&{background:", ";color:", ";border:", ";box-shadow:0px 2px 4px rgba(0,0,0,0.1);border-radius:4px;display:flex;align-items:center;min-height:24px;margin:4px;padding:12px;line-height:16px;font-size:12px;z-index:999999;}"], function (props) {
  return props.variant === 'dark' ? '#333' : '#FFF';
}, function (props) {
  return props.variant === 'dark' ? '#FFF' : '#666';
}, function (props) {
  return props.variant === 'dark' ? 'none' : '1px solid #CCCCCC';
});
StyledTooltip.defaultProps = {
  theme: theme,
  fontFamily: 'sansSerif'
};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var options = {
    placement: props.placement,
    modifiers: {
      offset: {
        offset: props.offset
      }
    }
  };

  var triggerElement = function triggerElement(_ref2) {
    var setReference = _ref2.setReference,
        toggle = _ref2.toggle;
    return /*#__PURE__*/React.cloneElement(children, {
      ref: setReference,
      onMouseEnter: toggle,
      onMouseLeave: toggle
    });
  };

  if (isBrowser()) {
    return /*#__PURE__*/React.createElement(Popper, {
      options: options,
      renderRef: triggerElement,
      style: {
        zIndex: 99999
      }
    }, /*#__PURE__*/React.createElement(StyledTooltip, {
      variant: props.variant,
      children: props.message
    }));
  } else {
    return children;
  }
};

Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  variant: 'dark',
  placement: 'bottom',
  offset: '0, 0',
  message: 'props.message text'
};
Tooltip.propTypes = {
  /** Sets the theme of tooltip. Options are light or dark. */
  variant: PropTypes.oneOf(['light', 'dark']),

  /** Sets the placement of tooltip relative to anchoring element. */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /** Sets the placement of tooltip relative to anchoring element. */
  offset: PropTypes.string,

  /** Sets the content of tooltip. Only accepts text and not markup. */
  message: PropTypes.string
};
export default Tooltip;