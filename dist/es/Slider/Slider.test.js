import Slider from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Slider component sanity', function () {
  it('has name', function () {
    expect(Slider.displayName).toBe('Slider');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Slider, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Slider, null)));
    expect(component).toMatchSnapshot();
  });
});