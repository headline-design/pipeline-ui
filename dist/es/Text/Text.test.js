import React from 'react';
import renderer from 'react-test-renderer';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
configure({
  adapter: new Adapter()
});
describe('Text component sanity', function () {
  it('has name', function () {
    expect(Text.displayName).toBe('Text');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Text, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Text, null)));
    expect(component).toMatchSnapshot();
  });
});
describe('Text style tests', function () {
  it('static passes display prop', function () {
    var tree = renderer.create( /*#__PURE__*/React.createElement(Text.span, {
      display: "block"
    })).toJSON();
    expect(tree).toHaveStyleRule('display', 'block');
  });
});