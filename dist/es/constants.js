import { compose, color, space, fontFamily, fontSize, fontWeight, lineHeight, textAlign, letterSpacing // layout
, display, size, width, height, minWidth, minHeight, maxWidth, maxHeight, overflow, verticalAlign // position
, position, zIndex, top, right, bottom, left // borders
, borders, borderColor, borderRadius, boxShadow // flexbox
, flexBasis, flexDirection, flexWrap, alignContent, alignItems, justifyContent, justifyItems // flexitem
, flex, justifySelf, alignSelf, order } from 'styled-system';
export var COMMON = compose(color, space);
export var TYPOGRAPHY = compose(fontFamily, fontSize, fontWeight, lineHeight, textAlign, letterSpacing);
export var LAYOUT = compose(display, size, width, height, minWidth, minHeight, maxWidth, maxHeight, overflow, verticalAlign);
export var POSITION = compose(position, zIndex, top, right, bottom, left);
export var BORDERS = compose(borders, borderColor, borderRadius, boxShadow);
export var FLEXBOX = compose( // container
flexBasis, flexDirection, flexWrap, alignContent, alignItems, justifyContent, justifyItems, // item
flex, justifySelf, alignSelf, order);