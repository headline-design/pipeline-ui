import Field from './';
import Input from '../Input';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Field component sanity', function () {
  it('has name', function () {
    expect(Field.displayName).toBe('Field');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Field, {
      label: "Input label"
    }, /*#__PURE__*/React.createElement(Input, null)));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Themed input label"
    }, /*#__PURE__*/React.createElement(Input, null))));
    expect(component).toMatchSnapshot();
  });
});