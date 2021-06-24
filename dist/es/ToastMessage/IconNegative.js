import React, { Component } from 'react';
import styled from 'styled-components';

var NegativeIcon = function NegativeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h36v36H0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.083 3.526a1 1 0 0 1 1.738 0l16.232 28.506a1 1 0 0 1-.87 1.495H1.72a1 1 0 0 1-.869-1.495L17.083 3.526z",
    fill: "#fbe1de"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 15a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zm-1 10.333a1 1 0 1 1 2 0 1 1 0 0 1-2 0z",
    fill: "#DC2C10"
  }));
};

NegativeIcon.defaultProps = {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var WrappedIconNegative = function WrappedIconNegative(props) {
  return /*#__PURE__*/React.createElement(NegativeIcon, props);
};

var IconNegative = /*#__PURE__*/styled(WrappedIconNegative).withConfig({
  displayName: "IconNegative",
  componentId: "sc-6tt2b9-0"
})([""]);
export default IconNegative;