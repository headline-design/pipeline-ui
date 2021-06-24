import Icon from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Icon component sanity', function () {
  it('has name', function () {
    expect(Icon.displayName).toBe('Icon');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Icon, {
      name: "Close"
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Close"
    })));
    expect(component).toMatchSnapshot();
  });
});