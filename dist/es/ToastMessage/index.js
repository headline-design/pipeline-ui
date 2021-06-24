function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { timingFunctions, ellipsis } from 'polished';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import Link from '../Link';
import Button from '../Button';
import AnimatedIconProcessing from './AnimatedIconProcessing.js';
import IconPositive from './IconPositive';
import IconNegative from './IconNegative';
var animInKeyframes = /*#__PURE__*/keyframes(["from{transform:translateY(100%);}to{transform:translateY(0);}"]);
var animOutKeyframes = /*#__PURE__*/keyframes(["from{opacity:1;transform:translateY(0);}to{opacity:0;transform:translateY(120%);}"]);
var animOutKeyframesDesktop = /*#__PURE__*/keyframes(["from{opacity:1;transform:translateX(0);}to{opacity:0;transform:translateX(120%);}"]);
var AnimationWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "ToastMessage__AnimationWrapper",
  componentId: "sc-1jtqo0m-0"
})(["&{animation-name:", ";animation-duration:", ";animation-timing-function:", ";animation-delay:0s;animation-iteration-count:1;animation-direction:normal;animation-fill-mode:forwards;animation-play-state:running;}@media screen and (min-width:420px){animation-name:", ";}"], function (props) {
  return props.direction ? animOutKeyframes : animInKeyframes;
}, function (props) {
  return props.direction ? '500ms' : '300ms';
}, function (props) {
  return props.direction ? timingFunctions('easeOutSine') : 'ease';
}, function (props) {
  return props.direction ? animOutKeyframesDesktop : animInKeyframes;
});
var StyledToastContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "ToastMessage__StyledToastContainer",
  componentId: "sc-1jtqo0m-1"
})(["&{display:block;position:fixed;z-index:9999;top:auto;bottom:0;left:auto;right:0;width:100%;max-width:100%;pointer-events:none;}@media screen and (min-width:420px){width:420px;padding:1rem;}> div{width:100%;}"]);
var StyledTextCell = /*#__PURE__*/styled(Box).withConfig({
  displayName: "ToastMessage__StyledTextCell",
  componentId: "sc-1jtqo0m-2"
})(["&{", " text-align:left;}"], ellipsis());
var StyledToastMessage = /*#__PURE__*/styled(Box).withConfig({
  displayName: "ToastMessage__StyledToastMessage",
  componentId: "sc-1jtqo0m-3"
})(["&{pointer-events:all;user-select:none;overflow:hidden;display:flex;flex-flow:row nowrap;align-items:center;height:80px;padding:0 1rem;box-shadow:0px 8px 16px rgba(0,0,0,0.1);transition:all 0.15s ease;}&:hover{box-shadow:0px 8px 16px rgba(0,0,0,0.15);}> .iconBox{display:none;}> .closeBttn{display:none;}> ", " > div{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;word-wrap:normal;}@media screen and (max-width:420px){border-color:transparent;}@media screen and (min-width:420px){&{border-radius:4px;padding:", ";}> .iconBox{display:block;}> .closeBttn{display:flex;align-self:flex-start;}}"], StyledTextCell, function (props) {
  return props.closeElem ? '0 0 0 1rem' : '0 1rem';
});
var ToastMessage = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var themeIsDark = props.colorTheme === 'dark' ? true : false;

  var renderVariantSvg = function renderVariantSvg(variant) {
    switch (variant) {
      case 'processing':
        return /*#__PURE__*/React.createElement(AnimatedIconProcessing, {
          width: '32px',
          height: '32px'
        });
        break;

      case 'success':
        return /*#__PURE__*/React.createElement(IconPositive, {
          width: '32px',
          height: '32px'
        });
        break;

      case 'failure':
        return /*#__PURE__*/React.createElement(IconNegative, {
          width: '32px',
          height: '32px'
        });
        break;

      default:
        return '';
    }
  };

  var renderFigure = function renderFigure(_ref2) {
    var variant = _ref2.variant,
        icon = _ref2.icon;

    if (variant && variant !== 'default') {
      return /*#__PURE__*/React.createElement(Box, {
        className: 'iconBox',
        flex: '0 0',
        mr: 2
      }, renderVariantSvg(variant));
    } else if (icon && icon.length) {
      return /*#__PURE__*/React.createElement(Box, {
        className: 'iconBox',
        flex: '0 0',
        mr: 2
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        color: !themeIsDark ? 'primary' : 'white',
        size: '32px'
      }));
    } else {
      return null;
    }
  };

  var renderCloseBttn = function renderCloseBttn(_ref3) {
    var closeElem = _ref3.closeElem,
        closeFunction = _ref3.closeFunction;

    if (closeElem) {
      return /*#__PURE__*/React.createElement(Button.Text, {
        onClick: closeFunction,
        className: 'closeBttn',
        size: 'small',
        icononly: true
      }, /*#__PURE__*/React.createElement(Icon, {
        name: 'Close',
        size: '16px',
        color: !themeIsDark ? '#666' : '#afafaf'
      }));
    } else {
      return null;
    }
  };

  return /*#__PURE__*/React.createElement(StyledToastMessage, _extends({
    className: className,
    bg: !themeIsDark ? 'white' : 'near-black',
    border: 1,
    borderColor: !themeIsDark ? '#D6D6D6' : 'transparent',
    ref: ref
  }, props), renderFigure(props), /*#__PURE__*/React.createElement(StyledTextCell, {
    flex: '1 1 auto',
    mx: 2
  }, props.message && /*#__PURE__*/React.createElement(Text, {
    fontSize: 1,
    fontWeight: 3,
    color: !themeIsDark ? 'black' : 'white'
  }, props.message), props.secondaryMessage && /*#__PURE__*/React.createElement(Text, {
    fontSize: 1,
    color: !themeIsDark ? '#666' : '#afafaf'
  }, props.secondaryMessage)), /*#__PURE__*/React.createElement(Text, {
    flex: '0 1',
    mr: 2,
    textAlign: 'right',
    lineHeight: '18px'
  }, props.actionText && props.actionHref && /*#__PURE__*/React.createElement(Link, {
    href: props.actionHref,
    target: '_blank',
    color: !themeIsDark ? 'primary' : '#9387FF'
  }, props.actionText)), renderCloseBttn(props));
});

var ProtoToastMessage = /*#__PURE__*/function (_Component) {
  _inherits(ProtoToastMessage, _Component);

  var _super = _createSuper(ProtoToastMessage);

  function ProtoToastMessage(props) {
    var _this;

    _classCallCheck(this, ProtoToastMessage);

    _this = _super.call(this, props);

    _this.handleClose = function (e) {
      e.preventDefault();
    };

    return _this;
  }

  _createClass(ProtoToastMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          secondaryMessage = _this$props.secondaryMessage,
          actionHref = _this$props.actionHref,
          actionText = _this$props.actionText,
          variant = _this$props.variant,
          icon = _this$props.icon;
      return /*#__PURE__*/React.createElement(ToastMessage, _extends({
        message: message,
        secondaryMessage: secondaryMessage,
        actionHref: actionHref,
        actionText: actionText
      }, this.props));
    }
  }]);

  return ProtoToastMessage;
}(Component);

ProtoToastMessage.displayName = 'Proto Toast Message';
ProtoToastMessage.defaultProps = {
  message: 'Message text… ',
  secondaryMessage: '',
  actionHref: '',
  actionText: '',
  variant: '',
  icon: '',
  colorTheme: 'dark',
  closeElem: true
};

var ToastProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(ToastProvider, _React$Component);

  var _super2 = _createSuper(ToastProvider);

  function ToastProvider(props) {
    var _this2;

    _classCallCheck(this, ToastProvider);

    _this2 = _super2.call(this, props);

    _this2.addMessage = function (msg, data) {
      if (!msg) {
        return false;
      }

      _this2.setState(function () {
        return {
          isOpen: false
        };
      }, function () {
        setTimeout(function () {
          _this2.setState(function () {
            return {
              isOpen: true,
              unMount: false,
              currentMsg: _objectSpread({
                message: msg
              }, data)
            };
          }, function () {
            _this2.startTimer();
          });
        }, 500);
      });
    };

    _this2.removeMessage = function () {
      if (!_this2.state.isOpen) {
        return null;
      }

      _this2.clearTimer();

      _this2.setState(function (state, props) {
        return {
          isOpen: false
        };
      });
    };

    _this2.startTimer = function () {
      if (!document.hasFocus()) {
        return null;
      }

      _this2.clearTimer();

      _this2.timer = setTimeout(function () {
        _this2.removeMessage();
      }, _this2.props.delay);
    };

    _this2.clearTimer = function () {
      clearTimeout(_this2.timer);
    };

    _this2.handleClose = function (e) {
      e.preventDefault();
    };

    _this2.handleEnter = function (e) {
      e.preventDefault();

      _this2.clearTimer();
    };

    _this2.handleLeave = function (e) {
      e.preventDefault();

      _this2.startTimer();
    };

    _this2.renderMessage = function () {
      return /*#__PURE__*/React.createElement(ProtoToastMessage, _extends({}, _this2.state.currentMsg, {
        onMouseEnter: _this2.handleEnter,
        onMouseLeave: _this2.handleLeave,
        closeFunction: _this2.removeMessage
      }));
    };

    _this2.state = {
      isReady: false,
      isOpen: false,
      unMount: true,
      currentMsg: _this2.props.messageData
    };
    _this2.timer = {};
    return _this2;
  }

  _createClass(ToastProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.setState(function (state, props) {
        return {
          isReady: true
        };
      });

      window.onfocus = function () {
        _this3.startTimer();
      };

      window.onblur = function () {
        _this3.clearTimer();
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.onfocus = null;
      window.onblur = null;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isReady) {
        return null;
      }

      return /*#__PURE__*/React.createElement(StyledToastContainer, null, !this.state.unMount && /*#__PURE__*/React.createElement(AnimationWrapper, {
        direction: this.state.isOpen ? null : 'out'
      }, this.renderMessage()));
    }
  }]);

  return ToastProvider;
}(React.Component);

ToastProvider.displayName = 'Toast Message Provider';
ToastProvider.defaultProps = {
  messageData: {
    message: '[…Placeholder Message…]',
    secondaryMessage: '',
    actionHref: '',
    actionText: '',
    icon: '',
    variant: 'default'
  },
  delay: 3000
};
ToastMessage.Success = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(ToastMessage, _extends({
    ref: ref
  }, props, {
    variant: 'success'
  }));
});
ToastMessage.Failure = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(ToastMessage, _extends({
    ref: ref
  }, props, {
    variant: 'failure'
  }));
});
ToastMessage.Processing = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(ToastMessage, _extends({
    ref: ref
  }, props, {
    variant: 'processing'
  }));
});
ToastMessage.Provider = ToastProvider;
ToastMessage.defaultProps = {
  message: 'Write update here [Required]',
  secondaryMessage: '',
  actionHref: '',
  actionText: '',
  variant: 'default',
  icon: '',
  colorTheme: 'light',
  closeElem: false
};
ToastMessage.propTypes = {
  /**
   * Sets primary message text
   */
  message: PropTypes.string,

  /**
   * Sets secondary message text
   */
  secondaryMessage: PropTypes.string,

  /**
   * Sets URL for button
   */
  actionHref: PropTypes.string,

  /**
   * Sets text for button
   */
  actionText: PropTypes.string,

  /**
   * Sets type of ToastMessage to display
   */
  variant: PropTypes.oneOf(['default', 'success', 'failure', 'processing']),

  /**
   * Sets icon to display
   */
  icon: PropTypes.string,

  /**
   * Sets background and text color
   */
  colorTheme: PropTypes.oneOf(['light', 'dark']),

  /**
   * Allows ToastMessage to be closed by user
   */
  closeElem: PropTypes.bool
};
ToastMessage.displayName = 'ToastMessage';
export default ToastMessage;