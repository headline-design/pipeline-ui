import Progress from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Progress component sanity', function () {
  it('has name', function () {
    expect(Progress.displayName).toBe('Progress');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Progress, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Progress, null)));
    expect(component).toMatchSnapshot();
  });
});