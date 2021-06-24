import Card from '.';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Card component sanity', function () {
  it('has name', function () {
    expect(Card.displayName).toBe('Card');
  });
  it('matches default snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(Card, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Card, null)));
    expect(component).toMatchSnapshot();
  });
});