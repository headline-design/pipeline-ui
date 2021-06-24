import React, { Component } from 'react';
import styled from 'styled-components';

var PositiveIcon = function PositiveIcon(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z",
    fill: "#DFF6EC"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.616 14.284c.472.412.515 1.123.096 1.588l-6.084 6.75a1.153 1.153 0 0 1-1.633.077l-3.63-3.323a1.113 1.113 0 0 1-.059-1.59 1.156 1.156 0 0 1 1.615-.058l2.773 2.539 5.308-5.889a1.156 1.156 0 0 1 1.614-.095z",
    fill: "#33C489"
  }));
};

PositiveIcon.defaultProps = {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var WrappedIconPositive = function WrappedIconPositive(props) {
  return /*#__PURE__*/React.createElement(PositiveIcon, props);
};

var IconPositive = /*#__PURE__*/styled(WrappedIconPositive).withConfig({
  displayName: "IconPositive",
  componentId: "sc-127ag52-0"
})([""]);
export default IconPositive;