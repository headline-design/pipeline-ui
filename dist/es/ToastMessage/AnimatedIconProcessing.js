import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

var IconProcessing = function IconProcessing(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
    y: "5",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "30",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V1z",
    fill: "#4E3FCE",
    fillOpacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "15",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "25",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "20",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "15",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "20",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "10",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "10",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "5",
    width: "6",
    height: "6",
    rx: "1",
    fill: "#4E3FCE",
    fillOpacity: ".9"
  }));
};

IconProcessing.defaultProps = {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var WrappedIconProcessing = function WrappedIconProcessing(props) {
  return /*#__PURE__*/React.createElement(IconProcessing, props);
};

var flicker = /*#__PURE__*/keyframes(["0%{opacity:0.1;transform:translateY(-1px);}20%{opacity:0.6;}40%{opacity:0.9;transform:translateY(1px);}60%{opacity:0.5;transform:translateY(2px);}100%{opacity:0;transform:translateY(3px);}"]);
var AnimatedIconProcessing = /*#__PURE__*/styled(WrappedIconProcessing).attrs({
  seed: Math.floor(1000 + Math.random() * 7000),
  seeda: Math.floor(Date.now().toString().substring(2, 6) + Math.random() * 9000).toString().substring(0, 4),
  seedb: Math.floor(Date.now().toString().substring(0, 4) + Math.random() * 4500).toString().substring(0, 4)
}).withConfig({
  displayName: "AnimatedIconProcessing",
  componentId: "sc-1twif5k-0"
})(["&{display:block;}> *{animation-name:", ";animation-duration:", ";animation-timing-function:ease;animation-delay:0s;animation-iteration-count:infinite;}> *:nth-child(4n + 0){animation-duration:", ";animation-delay:", ";}> *:nth-child(2n + 0){animation-duration:", ";}> *:nth-child(3n + 0){animation-duration:", ";animation-delay:", ";}"], flicker, function (props) {
  return props.seed + 'ms';
}, function (props) {
  return props.seeda + 'ms';
}, function (props) {
  return props.seeda + 'ms';
}, function (props) {
  return props.seedb + 'ms';
}, function (props) {
  return props.seeda + 'ms';
}, function (props) {
  return props.seedb + 'ms';
});
export default AnimatedIconProcessing;