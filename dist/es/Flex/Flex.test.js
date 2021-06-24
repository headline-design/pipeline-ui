import Flex from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Flex component sanity', function () {
  it('has name', function () {
    expect(Flex.displayName).toBe('Flex');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Flex, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Flex, null)));
    expect(component).toMatchSnapshot();
  });
});