function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["address"],
    _excluded2 = ["clipboardText"];

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import Flex from '../Flex';
import Card from '../Card';
import Text from '../Text';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import Button from '../Button';
import Input from '../Input';
import QR from '../QR';
import Portal from '../Portal';
import { useHiddenState } from '../Hidden';
import { ModalBackdrop } from '../Modal';
import Clipboard from './CopyToClipboard';
var StyledInput = /*#__PURE__*/styled(Input).withConfig({
  displayName: "AlgoAddress__StyledInput",
  componentId: "sc-157q4n4-0"
})(["text-overflow:ellipsis;white-space:nowrap;"]);
StyledInput.defaultProps = {
  title: 'Algorand Address',
  'aria-label': 'Algorand Address'
};
var StyledWrapper = /*#__PURE__*/styled(Box).withConfig({
  displayName: "AlgoAddress__StyledWrapper",
  componentId: "sc-157q4n4-1"
})(["&{display:flex;flex-direction:row;align-items:center;width:100%;position:relative;}"]);

var AddressQrModal = function AddressQrModal(_ref) {
  var isOpen = _ref.isOpen,
      hide = _ref.hide,
      address = _ref.address;
  var text = {
    title: 'Algorand Address',
    description: 'To send funds to this Algorand address, scan this code using your mobile wallet app'
  };
  var colors = {
    foreground: 'black',
    background: 'white'
  };

  if (isOpen) {
    return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(ModalBackdrop, null, /*#__PURE__*/React.createElement(Card, {
      maxWidth: '100%',
      bg: colors.background,
      color: colors.foreground,
      border: 'none',
      borderRadius: 2,
      p: 0,
      display: 'flex',
      flexDirection: 'column'
    }, /*#__PURE__*/React.createElement(Button.Text, {
      icon: 'Close',
      mainColor: 'inherit',
      p: 0,
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      onClick: hide
    }), /*#__PURE__*/React.createElement(Text, {
      color: 'inherit',
      p: 3,
      borderBottom: 1,
      borderColor: 'blacks.4',
      lineHeight: 'solid',
      textAlign: 'center',
      fontWeight: 3
    }, text.title), /*#__PURE__*/React.createElement(Box, {
      p: [3, 4],
      overflow: 'scroll'
    }, /*#__PURE__*/React.createElement(Text, {
      color: 'inherit',
      textAlign: 'center',
      mb: 4
    }, text.description), /*#__PURE__*/React.createElement(Box // size={['100%', '200px']}
    , {
      width: 1,
      maxWidth: '220px',
      mx: 'auto',
      mb: 4,
      p: 4,
      bg: 'white',
      border: 1,
      borderColor: 'blacks.3',
      boxShadow: 2
    }, /*#__PURE__*/React.createElement(QR, {
      value: address,
      size: '100%'
    })), /*#__PURE__*/React.createElement(Clipboard, {
      text: address
    }, function (isCopied) {
      return /*#__PURE__*/React.createElement(Box, {
        color: 'inherit',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }, /*#__PURE__*/React.createElement(StyledInput, {
        readOnly: true,
        value: address,
        width: 1,
        p: 'auto',
        pl: 3,
        pr: '5rem',
        fontWeight: 3
      }), /*#__PURE__*/React.createElement(Button, {
        size: 'small',
        width: '4rem',
        mx: 2,
        position: 'absolute',
        right: 0
      }, !isCopied ? 'Copy' : /*#__PURE__*/React.createElement(Icon, {
        name: 'Check'
      })));
    })))));
  }

  return null;
};

var QRButton = function QRButton(_ref2) {
  var address = _ref2.address,
      props = _objectWithoutProperties(_ref2, _excluded);

  var _useHiddenState = useHiddenState(),
      visible = _useHiddenState.visible,
      toggle = _useHiddenState.toggle;

  var text = {
    tooltip: 'Show QR Code',
    button: 'Show QR Code'
  };

  if (!props.textLabels) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
      message: text.tooltip
    }, /*#__PURE__*/React.createElement(Button, {
      size: 'small',
      ml: 2,
      p: 0,
      onClick: toggle
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'CenterFocusStrong'
    }))), /*#__PURE__*/React.createElement(AddressQrModal, {
      address: address,
      isOpen: visible,
      hide: toggle
    }));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    size: 'small',
    ml: 2,
    onClick: toggle
  }, text.button), /*#__PURE__*/React.createElement(AddressQrModal, {
    address: address,
    isOpen: visible,
    hide: toggle
  }));
};

var CopyButton = function CopyButton(_ref3) {
  var clipboardText = _ref3.clipboardText,
      props = _objectWithoutProperties(_ref3, _excluded2);

  var text = {
    tooltip: 'Copy to clipboard',
    button: 'Copy'
  };

  if (!props.textLabels) {
    return /*#__PURE__*/React.createElement(Clipboard, {
      text: clipboardText
    }, function (isCopied) {
      return /*#__PURE__*/React.createElement(Tooltip, {
        message: text.tooltip
      }, /*#__PURE__*/React.createElement(Button, {
        size: 'small',
        p: 0
      }, /*#__PURE__*/React.createElement(Icon, {
        name: isCopied ? 'Check' : 'Assignment'
      })));
    });
  }

  return /*#__PURE__*/React.createElement(Clipboard, {
    text: clipboardText
  }, function (isCopied) {
    return /*#__PURE__*/React.createElement(Button, {
      size: 'small'
    }, !isCopied ? text.button : 'Copied!');
  });
};

var AlgoAddress = /*#__PURE__*/function (_Component) {
  _inherits(AlgoAddress, _Component);

  var _super = _createSuper(AlgoAddress);

  function AlgoAddress() {
    _classCallCheck(this, AlgoAddress);

    return _super.apply(this, arguments);
  }

  _createClass(AlgoAddress, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(StyledWrapper, this.props, /*#__PURE__*/React.createElement(StyledInput, {
        readOnly: true,
        value: this.props.address,
        ref: this.inputRef,
        width: 1,
        fontWeight: 3,
        p: 'auto',
        pl: 3,
        pr: this.props.textLabels ? '12rem' : '6rem'
      }), /*#__PURE__*/React.createElement(Flex, {
        position: 'absolute',
        right: 0,
        mr: 2
      }, /*#__PURE__*/React.createElement(CopyButton, {
        clipboardText: this.props.address,
        textLabels: this.props.textLabels
      }), /*#__PURE__*/React.createElement(QRButton, {
        address: this.props.address,
        textLabels: this.props.textLabels
      })));
    }
  }]);

  return AlgoAddress;
}(Component);

AlgoAddress.propTypes = {
  /**
   * Sets Ethereum address as the value of the field
   */
  address: PropTypes.string.isRequired,

  /**
   * Changes buttons to text from icons
   */
  textLabels: PropTypes.bool
};
AlgoAddress.defaultProps = {
  textLabels: false
};
AlgoAddress.displayName = 'AlgoAddress';
export default AlgoAddress;