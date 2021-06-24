import Link from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Link component sanity', function () {
  it('has name', function () {
    expect(Link.displayName).toBe('Link');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Link, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Link, null)));
    expect(component).toMatchSnapshot();
  });
});