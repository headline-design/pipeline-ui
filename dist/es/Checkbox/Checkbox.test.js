import Checkbox from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Checkbox component sanity', function () {
  it('has name', function () {
    expect(Checkbox.displayName).toBe('Checkbox');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Checkbox, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Checkbox, null)));
    expect(component).toMatchSnapshot();
  });
});