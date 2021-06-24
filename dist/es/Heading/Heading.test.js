import Heading from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Heading component sanity', function () {
  it('has name', function () {
    expect(Heading.displayName).toBe('Heading');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Heading, {
      as: 'h1'
    }, "Heading 1"));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Heading, {
      as: 'h1'
    }, "Heading 1")));
    expect(component).toMatchSnapshot();
  });
});