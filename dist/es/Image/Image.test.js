import Image from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Image component sanity', function () {
  it('has name', function () {
    expect(Image.displayName).toBe('Image');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Image, {
      src: "test.jpg"
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Image, {
      src: "test.jpg"
    })));
    expect(component).toMatchSnapshot();
  });
});