import QR from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('QR component sanity', function () {
  it('has name', function () {
    expect(QR.displayName).toBe('QR');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(QR, {
      value: "test"
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(QR, {
      value: "test"
    })));
    expect(component).toMatchSnapshot();
  });
});