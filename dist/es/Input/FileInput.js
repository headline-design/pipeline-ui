function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["variant"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';
var StyledFileInput = /*#__PURE__*/styled('input').withConfig({
  displayName: "FileInput__StyledFileInput",
  componentId: "sc-1i3ij93-0"
})(["&{width:0;height:0;opacity:0;position:absolute;overflow:hidden;z-index:-1;}"]);
var StyledFileLabel = /*#__PURE__*/styled('label').withConfig({
  displayName: "FileInput__StyledFileLabel",
  componentId: "sc-1i3ij93-1"
})(["&{display:inline-block;position:relative;cursor:pointer;}"]);

var FileInput = /*#__PURE__*/function (_Component) {
  _inherits(FileInput, _Component);

  var _super = _createSuper(FileInput);

  function FileInput(props) {
    var _this;

    _classCallCheck(this, FileInput);

    _this = _super.call(this, props);

    _this.handleClick = function (e) {
      _this.fileInput.current.click();
    };

    _this.handleChange = function (e) {
      var files = _this.fileInput.current.files;

      _this.setState({
        files: files.length ? true : false
      });

      if (files && files.length > 1) {
        _this.setState({
          buttonLabel: files.length + ' files selected'
        });
      } else if (files && files.length) {
        _this.setState({
          buttonLabel: files[0].name
        });
      } else {
        _this.setState({
          buttonLabel: 'Choose file…'
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.fileInput = /*#__PURE__*/React.createRef();
    _this.state = {
      buttonLabel: 'Choose file…',
      files: false
    };
    return _this;
  }

  _createClass(FileInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, _excluded);

      if (variant === 'unstyled') {
        return /*#__PURE__*/React.createElement("input", _extends({
          type: 'file'
        }, props));
      }

      return /*#__PURE__*/React.createElement(StyledFileLabel, null, /*#__PURE__*/React.createElement(StyledFileInput, _extends({
        type: 'file'
      }, props, {
        ref: this.fileInput,
        onChange: this.handleChange
      })), /*#__PURE__*/React.createElement(Button, {
        icon: this.state.files ? 'CloudDone' : 'CloudUpload',
        onClick: this.handleClick
      }, this.state.buttonLabel));
    }
  }]);

  return FileInput;
}(Component);

FileInput.displayName = 'FileInput';
export default FileInput;