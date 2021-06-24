import { tint, shade, readableColor } from 'polished'; // pipeline base colors

var baseColors = {
  black: '#000',
  white: '#FFF',
  blue: '#36ADF1',
  green: '#28C081',
  yellow: '#FD9D28',
  red: '#DC2C10',
  blurple: '#4E3FCE',
  headlineblue: '#3259D6'
}; // pipeline palette

var colors = {
  blurple: {
    base: baseColors.blurple,
    text: readableColor(baseColors.blurple),
    light: [null, tint(0.2, baseColors.blurple)],
    dark: [null, shade(0.2, baseColors.blurple)]
  },
  blue: {
    base: baseColors.blue,
    text: readableColor(baseColors.blue),
    light: [null, tint(0.9, baseColors.blue)],
    dark: [null, shade(0.4, baseColors.blue)]
  },
  green: {
    base: baseColors.green,
    text: baseColors.white,
    light: [null, tint(0.9, baseColors.green)],
    dark: [null, shade(0.4, baseColors.green)]
  },
  yellow: {
    base: baseColors.yellow,
    text: readableColor(baseColors.yellow),
    light: [null, tint(0.9, baseColors.yellow)],
    dark: [null, shade(0.4, baseColors.yellow)]
  },
  red: {
    base: baseColors.red,
    text: readableColor(baseColors.red),
    light: [null, tint(0.9, baseColors.red)],
    dark: [null, shade(0.4, baseColors.red)]
  }
};
var blurple = colors.blurple;
var blue = colors.blue;
var green = colors.green;
var yellow = colors.yellow;
var red = colors.red;
export { blurple };
export { blue };
export { green };
export { yellow };
export { red };
export default baseColors;