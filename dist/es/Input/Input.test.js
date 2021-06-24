import Input from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Input component sanity', function () {
  it('has name', function () {
    expect(Input.displayName).toBe('Input');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Input, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Input, null)));
    expect(component).toMatchSnapshot();
  });
});