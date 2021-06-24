import Box from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Box component sanity', function () {
  it('has name', function () {
    expect(Box.displayName).toBe('Box');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Box, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Box, null)));
    expect(component).toMatchSnapshot();
  });
});