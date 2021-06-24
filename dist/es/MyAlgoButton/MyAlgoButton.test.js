import MyAlgoButton from '.';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('MyAlgoButton component sanity', function () {
  it('has name', function () {
    expect(MyAlgoButton.displayName).toBe('MyAlgoButton');
  });
  it('matches default snapshot', function () {
    var component = shallow( /*#__PURE__*/React.createElement(MyAlgoButton, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = shallow( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(MyAlgoButton, null)));
    expect(component).toMatchSnapshot();
  });
});