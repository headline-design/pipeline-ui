import Avatar from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Avatar component sanity', function () {
  it('has name', function () {
    expect(Avatar.displayName).toBe('Avatar');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Avatar, {
      src: "test.jpg"
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: "test.jpg"
    })));
    expect(component).toMatchSnapshot();
  });
});