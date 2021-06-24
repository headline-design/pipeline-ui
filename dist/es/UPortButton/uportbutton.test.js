import UPortButton from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('UPortButton component sanity', function () {
  it('has name', function () {
    expect(UPortButton.displayName).toBe('UPortButton');
  });
  it('matches default snapshot', function () {
    var component = shallow( /*#__PURE__*/React.createElement(UPortButton, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = shallow( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(UPortButton, null)));
    expect(component).toMatchSnapshot();
  });
});