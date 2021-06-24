import Tooltip from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
import Button from '../Button';
describe('Tooltip component sanity', function () {
  it('has name', function () {
    expect(Tooltip.displayName).toBe('Tooltip');
  });
  it('matches default snapshot', function () {
    var component = mount( /*#__PURE__*/React.createElement(Tooltip, null, /*#__PURE__*/React.createElement(Button, null)));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Tooltip, null, /*#__PURE__*/React.createElement(Button, null))));
    expect(component).toMatchSnapshot();
  });
});